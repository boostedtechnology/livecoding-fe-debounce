'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  onFocus: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery, onFocus }) => {
  return (
    <div className="relative">
      <input
        data-testid="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={onFocus}
        placeholder="Search movies..."
        className="w-full px-4 py-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />
      <Search data-testid="search-icon" className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchInput;
