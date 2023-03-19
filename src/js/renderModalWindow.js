import refs from './refs';
import constants from './constants';
import renderDefaultPoster from './renderDefaultPoster';
import fetchMovieTreiler from './api/fetchMovieTreiler';
import renderDefaultOverview from './renderDefaultOverview';

const { modalImgConteiner, modalMovieInfo } = refs;

const { POSTER_URL_1x, POSTER_URL_2x } = constants;

function onRequestVideoClick(event) {
  const currentTargetElement = event.target;
  const id = Number(currentTargetElement.getAttribute('id'));
  fetchMovieTreiler(id);
  console.log(currentTargetElement)
  console.log(id)
}

function renderModalWindow(response) {
  modalImgConteiner.innerHTML = '';
  modalMovieInfo.innerHTML = '';
  const data = response.data;
  console.log(response.data)
  const {
    id,
    original_title,
    overview,
    popularity,
    poster_path,
    vote_average,
    vote_count,
  } = data;
  const genres = [];
  data.genres.map(element => genres.push(element.name));
  const markupImg = [
    `<img class="modal__img"
                srsset='${POSTER_URL_1x}/${poster_path} 1x,
                        ${POSTER_URL_2x}/${poster_path} 2x'
                src='${renderDefaultPoster(poster_path)}'
                loading="lazy"
                alt="movie's poster">`,
  ].join('');
  modalImgConteiner.insertAdjacentHTML('afterbegin', markupImg);
  
  const marcupMivieInfo = [
    `<h1 class="modal-window__title">${original_title}</h1>
    <ul class="movie-info__list">
      <li class="movie-info__item">
        <p class="movie-info__type">Vote / Votes</p>
        <p class="movie-info__text movie-info__text--flex">
        <span class="movie-info__text-orange">${vote_average.toFixed(1)}
        </span> / <span>${vote_count}</span>
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
        <p class="movie-info__text">${genres.slice(0, 3).join(', ')}</p>
      </li>
        </ul>
      <button type="button" class="modal__request-video" id='${id}'>Watch trailer</button>
      <p class="movie-info__about">About</p>
      <p class="movie-info__text-about">${renderDefaultOverview(overview)}</p>`,
  ].join('');
  modalMovieInfo.insertAdjacentHTML('afterbegin', marcupMivieInfo);

  const requestVideo = document.querySelector('.modal__request-video')
  requestVideo.addEventListener('click', onRequestVideoClick)
}


export default renderModalWindow;
