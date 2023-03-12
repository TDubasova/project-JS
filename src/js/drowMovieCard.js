import refs from './refs';
import ApiService from './newApiService';
import { genresList } from './jenresList';
import movieGenreId from './movieGenreId';
import constants from './constants';

const { galleryConteiner } = refs;
const { POSTER_URL } = constants;

const apiService = new ApiService();

export default function drawMovieCard(responceTopMovies, genresList) {
  const markup = responceTopMovies.results
    .map(
      ({ id, poster_path, release_date, genre_ids, original_title }) =>
        `<div class="movie__card">
            <a href="" class="movie__link js-movie-link" id='${id}'>
                <img class="movie__img" src='${POSTER_URL}/${poster_path}' alt="movie's poster"/>
                <h2 class="movie__title">${original_title}</h2>
                <p class="movie__info">${movieGenreId(
                  genre_ids,
                  genresList
                )} | ${release_date.slice(0, 4)}</p>
            </a>
        </div>`
    )
    .join('');
  galleryConteiner.insertAdjacentHTML('beforeend', markup);
}

