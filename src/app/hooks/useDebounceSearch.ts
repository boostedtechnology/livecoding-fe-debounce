import { useEffect, useState } from 'react';

const useDebounceSearch = (delay: number) => {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);

  return { query, setQuery, debouncedQuery };
};

export default useDebounceSearch;
