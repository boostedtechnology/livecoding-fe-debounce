export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating?: number;
  genre?: string[];
}

export const movieList: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 9.3,
    genre: ['Drama'],
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    year: 2019,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Action', 'Adventure', 'Drama'],
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    rating: 9.0,
    genre: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    year: 1994,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.9,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 5,
    title: 'Fight Club',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.8,
    genre: ['Drama'],
  },
  {
    id: 6,
    title: 'Inception',
    year: 2010,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    rating: 8.8,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    id: 7,
    title: 'The Matrix',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.7,
    genre: ['Action', 'Sci-Fi'],
  },
  {
    id: 8,
    title: 'Interstellar',
    year: 2014,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    id: 9,
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Animation', 'Action', 'Adventure'],
  },
  {
    id: 10,
    title: 'The Departed',
    year: 2006,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 11,
    title: 'Forrest Gump',
    year: 1994,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.8,
    genre: ['Drama', 'Romance'],
  },
  {
    id: 12,
    title: 'Goodfellas',
    year: 1990,
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.7,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 13,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    rating: 8.8,
    genre: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    id: 14,
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.7,
    genre: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    id: 15,
    title: 'The Green Mile',
    year: 1999,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Crime', 'Drama', 'Fantasy'],
  },
  {
    id: 16,
    title: 'Saving Private Ryan',
    year: 1998,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Drama', 'War'],
  },
  {
    id: 17,
    title: 'Gladiator',
    year: 2000,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Action', 'Adventure', 'Drama'],
  },
  {
    id: 18,
    title: 'Children of Heaven',
    year: 1997,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Drama', 'Family'],
  },
  {
    id: 19,
    title: 'Whiplash',
    year: 2014,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    rating: 8.5,
    genre: ['Drama', 'Music'],
  },
  {
    id: 20,
    title: 'The Prestige',
    year: 2006,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Drama', 'Mystery', 'Sci-Fi'],
  },
  {
    id: 21,
    title: 'The Lion King',
    year: 1994,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Animation', 'Adventure', 'Drama'],
  },
  {
    id: 22,
    title: 'Terminator 2: Judgment Day',
    year: 1991,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Action', 'Sci-Fi'],
  },
  {
    id: 23,
    title: 'Back to the Future',
    year: 1985,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Adventure', 'Comedy', 'Sci-Fi'],
  },
  {
    id: 24,
    title: 'Spirited Away',
    year: 2001,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Animation', 'Adventure', 'Family'],
  },
  {
    id: 26,
    title: 'Heat',
    year: 1995,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 27,
    title: 'The Thing',
    year: 1982,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Horror', 'Mystery', 'Sci-Fi'],
  },
  {
    id: 29,
    title: 'The Godfather Part II',
    year: 1974,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 9.0,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 30,
    title: 'Mad Max: Fury Road',
    year: 2015,
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    id: 31,
    title: 'Blade Runner 2049',
    year: 2017,
    poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg',
    rating: 8.0,
    genre: ['Action', 'Drama', 'Sci-Fi'],
  },
  {
    id: 32,
    title: 'La La Land',
    year: 2016,
    poster: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg',
    rating: 8.0,
    genre: ['Comedy', 'Drama', 'Music'],
  },
  {
    id: 33,
    title: 'The Usual Suspects',
    year: 1995,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Crime', 'Mystery', 'Thriller'],
  },
  {
    id: 34,
    title: 'Oldboy',
    year: 2003,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Action', 'Drama', 'Mystery'],
  },
  {
    id: 35,
    title: 'The Shining',
    year: 1980,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Drama', 'Horror'],
  },
  {
    id: 36,
    title: 'Taxi Driver',
    year: 1976,
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 37,
    title: "Schindler's List",
    year: 1993,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 9.0,
    genre: ['Biography', 'Drama', 'History'],
  },
  {
    id: 38,
    title: 'Inception',
    year: 2010,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    rating: 8.8,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    id: 39,
    title: 'Vertigo',
    year: 1958,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Mystery', 'Romance', 'Thriller'],
  },
  {
    id: 40,
    title: 'Amélie',
    year: 2001,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYThmYjJhMGItNjlmOC00ZDRiLWEzNjUtZjU4MjA3MzY0MzFmXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Comedy', 'Romance'],
  },
  {
    id: 41,
    title: 'Interstellar',
    year: 2014,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    id: 42,
    title: 'The Princess Bride',
    year: 1987,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg',
    rating: 7.9,
    genre: ['Adventure', 'Family', 'Fantasy'],
  },
  {
    id: 43,
    title: 'The Dark Knight',
    year: 2008,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    rating: 9.0,
    genre: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 44,
    title: 'The Green Mile',
    year: 1999,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Crime', 'Drama', 'Fantasy'],
  },
  {
    id: 45,
    title: 'The Great Dictator',
    year: 1940,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Comedy', 'Drama', 'War'],
  },
  {
    id: 46,
    title: 'Casablanca',
    year: 1942,
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Drama', 'Romance', 'War'],
  },
  {
    id: 47,
    title: 'The Deer Hunter',
    year: 1978,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'War'],
  },
  {
    id: 48,
    title: 'Fargo',
    year: 1996,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 49,
    title: 'Once Upon a Time in America',
    year: 1984,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 50,
    title: 'Good Will Hunting',
    year: 1997,
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Drama', 'Romance'],
  },
  {
    id: 51,
    title: 'Reservoir Dogs',
    year: 1992,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 52,
    title: 'Requiem for a Dream',
    year: 2000,
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Drama'],
  },
  {
    id: 53,
    title: 'American Beauty',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Drama'],
  },
  {
    id: 54,
    title: 'Apocalypse Now Redux',
    year: 1979,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Drama', 'Mystery', 'War'],
  },
  {
    id: 55,
    title: 'The Pianist',
    year: 2002,
    poster:
      'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Biography', 'Drama', 'Music'],
  },
  {
    id: 56,
    title: '2001: A Space Odyssey',
    year: 1968,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Adventure', 'Sci-Fi'],
  },
  {
    id: 58,
    title: 'Akira',
    year: 1988,
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_SX300.jpg',
    rating: 8.0,
    genre: ['Animation', 'Action', 'Sci-Fi'],
  },
  {
    id: 59,
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Drama', 'Romance', 'Sci-Fi'],
  },
  {
    id: 60,
    title: 'The Godfather',
    year: 1972,
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 9.2,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 61,
    title: 'Solaris',
    year: 1972,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDRhMy00ODc2LWI2NGYtMWFlODYyN2VlNDQyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'Mystery', 'Sci-Fi'],
  },
  {
    id: 62,
    title: 'Perfect Blue',
    year: 1997,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYThmYjJhMGItNjlmOC00ZDRiLWEzNjUtZjU4MjA3MzY0MzFmXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg',
    rating: 8.0,
    genre: ['Animation', 'Horror', 'Mystery'],
  },
  {
    id: 63,
    title: 'Come and See',
    year: 1985,
    poster:
      'https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Drama', 'War'],
  },
  {
    id: 64,
    title: 'The Great Dictator',
    year: 1940,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Comedy', 'Drama', 'War'],
  },
  {
    id: 65,
    title: 'Casablanca',
    year: 1942,
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Drama', 'Romance', 'War'],
  },
  {
    id: 66,
    title: 'The Deer Hunter',
    year: 1978,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'War'],
  },
  {
    id: 67,
    title: 'Fargo',
    year: 1996,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 68,
    title: 'No Country for Old Men',
    year: 2007,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg',
    rating: 8.5,
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 69,
    title: 'The Elephant Man',
    year: 1980,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGItNDE3Ny00OThjLWE0NzQtZTU3YjMzZTZjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Biography', 'Drama'],
  },
  {
    id: 70,
    title: 'The Sixth Sense',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Drama', 'Mystery', 'Thriller'],
  },
  {
    id: 71,
    title: 'Raging Bull',
    year: 1980,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Biography', 'Drama', 'Sport'],
  },
  {
    id: 72,
    title: 'Barry Lyndon',
    year: 1975,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Adventure', 'Drama', 'War'],
  },
  {
    id: 73,
    title: 'The Silence of the Lambs',
    year: 1991,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 74,
    title: 'Goodfellas',
    year: 1990,
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.7,
    genre: ['Biography', 'Crime', 'Drama'],
  },
  {
    id: 75,
    title: 'The Thing',
    year: 1982,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Horror', 'Mystery', 'Sci-Fi'],
  },
  {
    id: 76,
    title: 'The 400 Blows',
    year: 1959,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 77,
    title: 'Blade Runner',
    year: 1982,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Action', 'Drama', 'Sci-Fi'],
  },
  {
    id: 78,
    title: 'The Terminator',
    year: 1984,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Action', 'Sci-Fi'],
  },
  {
    id: 79,
    title: 'Die Hard',
    year: 1988,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Action', 'Thriller'],
  },
  {
    id: 80,
    title: 'Se7en',
    year: 1995,
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Crime', 'Drama', 'Mystery'],
  },
  {
    id: 81,
    title: 'The Hunt',
    year: 2012,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Drama'],
  },
  {
    id: 82,
    title: 'Memories of Murder',
    year: 2003,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Crime', 'Drama', 'Mystery'],
  },
  {
    id: 83,
    title: 'Fight Club',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.8,
    genre: ['Drama'],
  },
  {
    id: 84,
    title: 'In the Mood for Love',
    year: 2000,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'Romance'],
  },
  {
    id: 85,
    title: 'High and Low',
    year: 1963,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.4,
    genre: ['Crime', 'Drama', 'Mystery'],
  },
  {
    id: 86,
    title: 'Yi Yi',
    year: 2000,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Drama'],
  },
  {
    id: 87,
    title: 'Ran',
    year: 1985,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmU1NGYwZWYtOWExNi00ZTEyLTgwMmUtM2ZlMDVjNWM4YjVlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Action', 'Drama', 'War'],
  },
  {
    id: 88,
    title: 'The Truman Show',
    year: 1998,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Comedy', 'Drama'],
  },
  {
    id: 89,
    title: '12 Angry Men',
    year: 1957,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
    rating: 9.0,
    genre: ['Drama'],
  },
  {
    id: 90,
    title: 'A Clockwork Orange',
    year: 1971,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg',
    rating: 8.3,
    genre: ['Crime', 'Drama', 'Sci-Fi'],
  },
  {
    id: 91,
    title: 'The Seventh Seal',
    year: 1957,
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Drama', 'Fantasy'],
  },
  {
    id: 92,
    title: 'Parasite',
    year: 2019,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    rating: 8.6,
    genre: ['Comedy', 'Drama', 'Thriller'],
  },
  {
    id: 93,
    title: 'The Night of the Hunter',
    year: 1955,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.0,
    genre: ['Crime', 'Drama', 'Film-Noir'],
  },
  {
    id: 94,
    title: 'Barry Lyndon',
    year: 1975,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Adventure', 'Drama', 'War'],
  },
  {
    id: 95,
    title: 'The 400 Blows',
    year: 1959,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Crime', 'Drama'],
  },
  {
    id: 96,
    title: 'Harakiri',
    year: 1962,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 8.7,
    genre: ['Action', 'Drama', 'History'],
  },
  {
    id: 97,
    title: 'Chungking Express',
    year: 1994,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Comedy', 'Drama', 'Romance'],
  },
  {
    id: 98,
    title: 'The Red Shoes',
    year: 1948,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'Music', 'Romance'],
  },
  {
    id: 99,
    title: 'Throne of Blood',
    year: 1957,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDUxN2I5NDUtZjdlMC00NjlmLTg0OTQtNjk0NjAxZjFmZTUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'History'],
  },
  {
    id: 100,
    title: 'The Night of the Hunter',
    year: 1955,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    rating: 8.0,
    genre: ['Crime', 'Drama', 'Film-Noir'],
  },
  {
    id: 101,
    title: 'Barry Lyndon',
    year: 1975,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Adventure', 'Drama', 'War'],
  },
  {
    id: 102,
    title: 'Before Sunrise',
    year: 1995,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDRhMy00ODc2LWI2NGYtMWFlODYyN2VlNDQyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.1,
    genre: ['Drama', 'Romance'],
  },
  {
    id: 103,
    title: 'The Maltese Falcon',
    year: 1941,
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bf4o6Uzw5wqLjdKwRuiDrN1xyvl.jpg',
    rating: 8.1,
    genre: ['Crime', 'Film-Noir', 'Mystery'],
  },
  {
    id: 104,
    title: 'Chinatown',
    year: 1974,
    poster: 'https://media.themoviedb.org/t/p/w220_and_h330_face/1wO2OmUCWButQyVPGWQEZn5twca.jpg',
    rating: 8.5,
    genre: ['Drama', 'Mystery', 'Thriller'],
  },
  {
    id: 105,
    title: 'L.A. Confidential',
    year: 1997,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    rating: 8.2,
    genre: ['Crime', 'Drama', 'Mystery'],
  },
];
