'use client';

import React, { memo } from 'react';
import { Heart, HeartOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Movie } from '../data/movieList';

const MovieItem = memo(
  ({
    movie,
    isFavourite,
    onToggleFavourite,
  }: {
    movie: Movie;
    isFavourite: boolean;
    onToggleFavourite: (id: number) => void;
  }) => (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
      data-testid={`movie-item-${movie.id}`}
    >
      <div className="flex items-center gap-3">
        <img src={movie.poster} alt={movie.title} className="w-12 h-16 object-cover rounded" />
        <div>
          <div className="font-medium">{movie.title}</div>
          <div className="text-sm text-gray-500">{movie.year}</div>
          {movie.genre && <div className="text-xs text-gray-400">{movie.genre.join(', ')}</div>}
        </div>
      </div>
      <button
        onClick={() => onToggleFavourite(movie.id)}
        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
      >
        {isFavourite ? (
          <Heart className="h-5 w-5 text-red-500 fill-current" />
        ) : (
          <HeartOff className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </motion.li>
  ),
);

MovieItem.displayName = 'MovieItem';

export default MovieItem;
