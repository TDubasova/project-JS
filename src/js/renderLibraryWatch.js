import refs from './refs';
import constants from './constants';
import renderReleasDate from './release-date';
import renderDefaultPoster from './renderDefaultPoster';

const { libraryConreinerWatched } = refs;
const { POSTER_URL_1x, POSTER_URL_2x } = constants;

function renderLibraryWatch(data) {
  libraryConreinerWatched.innerHTML = '';
  const marcupMovieWatch = data
    .map(
      ({ id, poster_path, release_date, genres, original_title }) =>
        `<li class="movie__card">
            <div class="movie__thumb">
                <img class="movie__img" id='${id}'
                srsset='${POSTER_URL_1x}/${poster_path} 1x,
                        ${POSTER_URL_2x}/${poster_path} 2x'
                src='${renderDefaultPoster(poster_path)}'
                loading="lazy"
                alt="movie's poster" />
            </div>
            <div class="movie__description">
                <h2 class="movie__title">${original_title}</h2>
                <p class="movie__info">${genres
                  .map(element => element.name)
                  .slice(0, 3)} | ${renderReleasDate(release_date)}</p>
            </div>
        </li>`
    )
    .join('');
  libraryConreinerWatched.insertAdjacentHTML('afterbegin', marcupMovieWatch);
}

export default renderLibraryWatch;
