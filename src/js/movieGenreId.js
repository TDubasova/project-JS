import { genresList } from './genresList';

export default function movieGenreId(genre_ids, genresList) {
  const arrayGenreName = [];
  for (let i = 0; i < genre_ids.length; i += 1) {
    for (const genre of genresList) {
      const { id, name } = genre;
      if (genre_ids[i] === id) {
        arrayGenreName.push(name);
      }
    }
  }
  if (arrayGenreName.length >= 3) {
    return arrayGenreName.slice(0, 3).join(', ');
  } else {
    return arrayGenreName.join(', ');
  }
}

