'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../store/moviesSlice';
import { RootState } from '../store';
import { Movie } from '../data/movieList';

interface MovieGridProps {
  movies: Movie[];
}

const MovieCard = ({ movie, isFavourite }: { movie: Movie; isFavourite: boolean }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = React.useState(false);

  const fallbackImage = 'https://via.placeholder.com/300x450?text=No+Image+Available';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative group cursor-pointer"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={imageError ? fallbackImage : movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold truncate">{movie.title}</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white/80 text-sm">{movie.year}</span>
              <button
                onClick={() => dispatch(toggleFavourite(movie.id))}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <Heart className={`h-5 w-5 ${isFavourite ? 'text-red-500 fill-current' : 'text-white'}`} />
              </button>
            </div>
            {movie.genre && (
              <div className="mt-1">
                <p className="text-white/60 text-xs truncate">{movie.genre.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

MovieCard.displayName = 'MovieCard';

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  const favourites = useSelector((state: RootState) => state.movies.favourites);

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFavourite={favourites.includes(movie.id)} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MovieGrid;
