'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import MovieSearch from './components/MovieSearch';
import MovieGrid from './components/MovieGrid';
import { movieList } from './data/movieList';

export default function Home() {
  return (
    <Provider store={store}>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 pt-8">
          <MovieSearch />
          <MovieGrid movies={movieList} />
        </div>
      </main>
    </Provider>
  );
}
