'use client';

import React, { useState, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';
import useDebounceSearch from '../hooks/useDebounceSearch';

interface Movie {
  id: number;
  title: string;
  year: number;
}

// Mock movie data
const mockMovies: Movie[] = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Pulp Fiction', year: 1994 },
  { id: 5, title: 'Fight Club', year: 1999 },
  { id: 6, title: 'Inception', year: 2010 },
  { id: 7, title: 'The Matrix', year: 1999 },
  { id: 8, title: 'Interstellar', year: 2014 },
  { id: 9, title: 'The Silence of the Lambs', year: 1991 },
  { id: 10, title: 'Forrest Gump', year: 1994 },
];

// Mock API call
const searchMovies = async (query: string): Promise<Movie[]> => {
  const delay = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return mockMovies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
};

const MovieSearch: React.FC = () => {
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  // const { query, setQuery, debouncedQuery } = useDebounceSearch(500);

  useEffect(() => {
    const handleSearch = async () => {
      if (query.trim() === '') {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      setIsLoading(true);
      setShowDropdown(true);

      try {
        const searchResults = await searchMovies(query);
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [query]);

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

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="relative search-container">
        {/* Search input */}
        <div className="relative">
          <input
            data-testid="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setShowDropdown(true)}
            placeholder="Search movies..."
            className="w-full px-4 py-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search data-testid="search-icon" className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div
            data-testid="search-dropdown"
            className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-10"
          >
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 data-testid="loader-icon" className="h-6 w-6 animate-spin text-blue-500" />
              </div>
            ) : results.length > 0 ? (
              <ul className="py-2">
                {results.map((movie) => (
                  <li
                    key={movie.id}
                    data-testid={`movie-item-${movie.id}`}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="font-medium">{movie.title}</div>
                    <div className="text-sm text-gray-500">{movie.year}</div>
                  </li>
                ))}
              </ul>
            ) : (
              query && (
                <div data-testid="no-results" className="p-4 text-center text-gray-500">
                  No movies found
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
