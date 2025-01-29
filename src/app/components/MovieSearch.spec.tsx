import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import event, { type UserEvent } from '@testing-library/user-event';
import MovieSearch from './MovieSearch';

// Mock the Lucide React icons
jest.mock('lucide-react', () => ({
  Search: () => <div data-testid="search-icon">Search Icon</div>,
  Loader2: () => <div data-testid="loader-icon">Loader Icon</div>,
}));

describe('MovieSearch Component', () => {
  let userEvent: UserEvent;

  beforeAll(async () => {
    userEvent = event.setup({ advanceTimers: jest.advanceTimersByTime });
  });

  beforeEach(() => {
    // Clear all timers between tests
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('renders the search input correctly', () => {
    render(<MovieSearch />);

    // Check if input exists
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    // Check if search icon exists
    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });

  it('shows loading state while searching', async () => {
    render(<MovieSearch />);

    // Type in the search input
    const searchInput = screen.getByTestId('search-input');

    await userEvent.type(searchInput, 'Matrix');
    // Fast-forward timers to trigger debounced search
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Check if loading indicator appears
    const loadingIcon = await screen.findByTestId('loader-icon');
    expect(loadingIcon).toBeInTheDocument();
  });

  it('displays search results after successful search', async () => {
    render(<MovieSearch />);

    // Type in the search input
    const searchInput = screen.getByTestId('search-input');
    await userEvent.type(searchInput, 'Matrix');

    await act(async () => {
      await jest.advanceTimersByTimeAsync(2000);
    });

    // Wait for results to appear
    await waitFor(async () => {
      const movieTitle = await screen.findByText('The Matrix');
      expect(movieTitle).toBeInTheDocument();
      expect(screen.getByText('1999')).toBeInTheDocument();
    });
  });

  it('shows "No movies found" message for empty results', async () => {
    render(<MovieSearch />);

    // Type a search term that won't match any movies
    const searchInput = screen.getByTestId('search-input');
    await userEvent.type(searchInput, 'xyzabc');

    // Fast-forward debounce timer
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Wait for no results message
    await waitFor(() => {
      expect(screen.getByText('No movies found')).toBeInTheDocument();
    });
  });

  it('debounces search requests correctly', async () => {
    render(<MovieSearch />);

    const searchInput = screen.getByTestId('search-input');

    // Type multiple characters quickly
    await userEvent.type(searchInput, 'The');

    // Fast-forward halfway through debounce time
    act(() => {
      jest.advanceTimersByTime(250);
    });

    // Type more characters
    await userEvent.type(searchInput, ' Matrix');

    // Verify that we haven't started searching yet
    expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument();

    // Fast-forward the remaining debounce time
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Now we should see the loading state
    expect(screen.getByTestId('loader-icon')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    render(<MovieSearch />);

    // Type to show dropdown
    const searchInput = screen.getByTestId('search-input');
    await userEvent.type(searchInput, 'Matrix');

    // Fast-forward debounce timer
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Wait for results
    await waitFor(() => {
      expect(screen.getByText('The Matrix')).toBeInTheDocument();
    });

    // Click outside
    fireEvent.click(document.body);

    // Verify dropdown is hidden
    expect(screen.queryByText('The Matrix')).not.toBeInTheDocument();
  });

  it('shows dropdown on input focus', async () => {
    render(<MovieSearch />);

    const searchInput = screen.getByTestId('search-input');

    // Focus the input
    await userEvent.click(searchInput);

    // Type some text
    await userEvent.type(searchInput, 'Matrix');

    // Fast-forward debounce timer
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Wait for results to appear
    await waitFor(() => {
      expect(screen.getByText('The Matrix')).toBeInTheDocument();
    });
  });

  it('handles empty input correctly', async () => {
    render(<MovieSearch />);

    const searchInput = screen.getByTestId('search-input');

    // Type something then delete it
    await userEvent.type(searchInput, 'Matrix');
    await userEvent.clear(searchInput);

    // Fast-forward debounce timer
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Verify no results are shown
    expect(screen.queryByText('The Matrix')).not.toBeInTheDocument();
    expect(screen.queryByText('No movies found')).not.toBeInTheDocument();
  });
});
