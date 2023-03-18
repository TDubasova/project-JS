import refs from './refs';
import constants from './constants';
import renderDefaultPoster from './renderDefaultPoster';

const { modalMovieConteiner } = refs;

const { POSTER_URL_1x, POSTER_URL_2x } = constants;

function renderModalWindow(response) {
  modalMovieConteiner.innerHTML = '';
  const data = response.data;
  const {
    original_title,
    overview,
    popularity,
    poster_path,
    vote_average,
    vote_count,
  } = data;
  const genres = [];
  data.genres.map(element => genres.push(element.name));
  const markup = [
    `<img class="modal__img" 
                srsset='${POSTER_URL_1x}/${poster_path} 1x,
                        ${POSTER_URL_2x}/${poster_path} 2x'
                src='${renderDefaultPoster(poster_path)}'
                loading="lazy"
                alt="movie's poster">
            <div class="modal-window__movie-info">
                <h1 class="modal-window__title">${original_title}</h1>
                <ul class="movie-info__list">
                    <li class="movie-info__item">
                        <p class="movie-info__type">Vote / Votes</p>
                        <p class="movie-info__text movie-info__text--flex">
                        <span class="movie-info__text-orange">${vote_average.toFixed(
                          1
                        )}</span> / 
                        <span>${vote_count}</span>
                    </li>
                    <li class="movie-info__item">
                        <p class="movie-info__type">Popularity</p>
                        <p class="movie-info__text">${popularity.toFixed(1)}</p>
                    </li>
                    <li class="movie-info__item">
                        <p class="movie-info__type">Original Title</p>
                        <p class="movie-info__text movie-info__text--title">${original_title}</p>
                    </li>
                    <li class="movie-info__item">
                        <p class="movie-info__type">Genre</p>
                        <p class="movie-info__text">${genres.join(', ')}</p>
                    </li>
                </ul>
                <p class="movie-info__about">About</p>
                <p class="movie-info__text-about">${overview}</p>
            </div>`,
  ].join('');
  modalMovieConteiner.insertAdjacentHTML('beforeend', markup);
}

export default renderModalWindow;
