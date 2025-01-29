This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Used as a mob programming session during interview.

## Getting Started

First, install dependencies.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

This session is designed to be a pair programming session. One person will be the driver and the other will be the navigator. The driver will be the one who writes the code and the navigator will be the one who watches the code and provides feedback.

The site shows an input field with a list of movies to search from. The movie search results are mocked and show a loading state, with a randomized delay to mimic a real API call.

The knowledge being tested is:
- Basic React local state management
- React custom hooks and useEffect advanced usage. E.g. shouldComponentUpdate
- Debouncing implementation with setTimeout
- Test component rendering

## Flow

- Remove the content of the hook useDebounceSearch.ts
- Use the local state to store the query as is and show the candidate the current state without debouncing
- Ask the candidate what's wrong with the current implementation
- If the candidate mentions the debounce, ask them to implement it in the custom hook useDebounceSearch.ts
- Ask the candidate to add a test to the component MovieSearch.tsx
- Ask the candidate to add a test to the useDebounceSearch hook