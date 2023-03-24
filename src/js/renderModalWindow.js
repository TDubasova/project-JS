import refs from './refs';
import constants from './constants';
import renderDefaultPoster from './renderDefaultPoster';
import fetchMovieTreiler from './api/fetchMovieTreiler';
import renderDefaultOverview from './renderDefaultOverview';
import {notifyInfo} from './utils/notify'
import { watched, queue, setWatchedLocalStoradge, setQueueLocalStoradge } from './localStorageService';

const { modalImgConteiner, modalMovieInfo, modalBtnWatched, modalBtnQueue } = refs;
const { POSTER_URL_1x, POSTER_URL_2x } = constants;

function onRequestVideoClick(event) {
  const currentTargetElement = event.target;
  const id = Number(currentTargetElement.getAttribute('id'));
  fetchMovieTreiler(id);
}

function onModalBtnWatchedClick() {
  const id = localStorage.getItem('id');
  if (!watched.includes(id)) {
    watched.push(id);
    setWatchedLocalStoradge(watched);
    const message = 'This movie was added to the collection of WATCHED films';
    notifyInfo(message);
    modalBtnWatched.disabled = true;
    modalBtnWatched.style.backgroundColor = '#808080';
  }
} 

function onModalBtnQueueClick() {
  const id = localStorage.getItem('id');
    
  if (!queue.includes(id)) {
    queue.push(id);
    setQueueLocalStoradge(queue);
    const message = 'This movie has been added to the movie QUEUE';
    notifyInfo(message);
    modalBtnQueue.disabled = true;
    modalBtnQueue.style.backgroundColor = '#808080';
    modalBtnQueue.style.color = '#FFFFFF';
  }
}

function renderModalWindow(response) {
  modalImgConteiner.innerHTML = '';
  modalMovieInfo.innerHTML = '';

  const data = response.data;
  const {
    id,
    original_title,
    overview,
    popularity,
    poster_path,
    vote_average,
    vote_count,
  } = data;
  
  const setMovieId = localStorage.setItem('id', data.id);

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

  const getMovieId = localStorage.getItem('id');

  if (watched.includes(getMovieId)) {
    modalBtnWatched.disabled = true;
    modalBtnWatched.style.backgroundColor = '#808080';
  } else {
    modalBtnWatched.disabled = false;
    modalBtnWatched.style.backgroundColor = '#FF6B01';
  }

  if (queue.includes(getMovieId)) {
    modalBtnQueue.disabled = true;
    modalBtnQueue.style.backgroundColor = '#808080';
  } else {
    modalBtnQueue.disabled = false;
    modalBtnQueue.style.backgroundColor = '#FFFFFF';
    modalBtnQueue.style.color = '#000000';
  }

  const requestVideo = document.querySelector('.modal__request-video');
  requestVideo.addEventListener('click', onRequestVideoClick);

  modalBtnWatched.addEventListener('click', onModalBtnWatchedClick);
  modalBtnQueue.addEventListener('click', onModalBtnQueueClick);
}

export default renderModalWindow;
