import refs from './refs';
import { genresList } from './genresList';
import clearGalleryContainer from './clearGalleryConreiner';
import movieGenreId from './movieGenreId';
import constants from './constants';
import renderReleasDate from './release-date';
import renderDefaultPoster from './renderDefaultPoster';

const { galleryConteiner } = refs;

const { POSTER_URL_1x, POSTER_URL_2x } = constants;

function renderTopMovie(response) {
  clearGalleryContainer();
  const data = response.data.results;
  const markup = data
    .map(
      ({ id, poster_path, release_date, genre_ids, original_title }) =>
        `<div class="movie__card">
                <img class="movie__img" id='${id}'
                srsset='${POSTER_URL_1x}/${poster_path} 1x,
                        ${POSTER_URL_2x}/${poster_path} 2x'
                src='${renderDefaultPoster(poster_path)}'
                loading="lazy"
                alt="movie's poster">
                <h2 class="movie__title">${original_title}</h2>
                <p class="movie__info">${movieGenreId(
                  genre_ids,
                  genresList
                )} | ${renderReleasDate(release_date)}</p>
          </div>`
    )
    .join('');

  galleryConteiner.insertAdjacentHTML('beforeend', markup);
}

export default renderTopMovie;
