'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Movie, movieList } from '../data/movieList';
import MovieItem from './MovieItem';
import SearchInput from './SearchInput';

// Mock API call with pagination
const searchMovies = async (query: string, page: number = 1): Promise<{ movies: Movie[]; hasMore: boolean }> => {
  const delay = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const filteredMovies = movieList.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));

  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    movies: filteredMovies.slice(start, end),
    hasMore: end < filteredMovies.length,
  };
};

const MovieSearch: React.FC = () => {
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState<string>('');

  const loadMovies = useCallback(async (searchQuery: string, pageNum: number, append: boolean = false) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);
    setShowDropdown(true);

    try {
      const { movies, hasMore: more } = await searchMovies(searchQuery, pageNum);
      setResults((prev) => (append ? [...prev, ...movies] : movies));
      setHasMore(more);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial search
  useEffect(() => {
    setPage(1);
    loadMovies(query, 1);
  }, [query, loadMovies]);

  // Infinite scroll
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
          loadMovies(query, page + 1, true);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, query, page, loadMovies],
  );

  // Virtual list setup
  const rowVirtualizer = useVirtualizer({
    count: results.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 80, // Increased height for the new card design
    overscan: 5,
  });

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggleFavourite = () => {};

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="relative search-container">
        <SearchInput query={query} setQuery={setQuery} onFocus={() => query && setShowDropdown(true)} />

        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              data-testid="search-dropdown"
              className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[32rem] overflow-y-auto z-10"
              ref={containerRef}
            >
              {isLoading && page === 1 ? (
                <div className="flex items-center justify-center p-4">
                  <Loader2 data-testid="loader-icon" className="h-6 w-6 animate-spin text-blue-500" />
                </div>
              ) : results.length > 0 ? (
                <ul className="py-2" style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
                  {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const movie = results[virtualRow.index];
                    return (
                      <div
                        key={movie.id}
                        ref={virtualRow.index === results.length - 1 ? lastMovieRef : null}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          transform: `translateY(${virtualRow.start}px)`,
                        }}
                      >
                        <MovieItem movie={movie} isFavourite={false} onToggleFavourite={handleToggleFavourite} />
                      </div>
                    );
                  })}
                </ul>
              ) : (
                query && (
                  <div data-testid="no-results" className="p-4 text-center text-gray-500">
                    No movies found
                  </div>
                )
              )}
              {isLoading && page > 1 && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MovieSearch;
