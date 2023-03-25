import refs from './refs';
import constants from './constants';
import renderDefaultPoster from './renderDefaultPoster';
import fetchMovieTreiler from './api/fetchMovieTreiler';
import renderDefaultOverview from './renderDefaultOverview';
import fetchLibraryQueue from './api/fetchLibraryQueue';
import fetchLibraryWatch from './api/fetchLibraryWatch';
import { notifyInfo } from './utils/notify';
import { addWatched, removeWatched, addQueue, removeQueue } from './message-list';
import { watched, queue, setWatchedLocalStoradge, setQueueLocalStoradge, getQueueLocalStoradge, getWatchedLocalStoradge } from './localStorageService';

const { modalImgContainer, modalMovieInfo, modalBtnWatched, modalBtnQueue, librarySectionQueue, librarySectionWatched } = refs;
const { POSTER_URL_1x, POSTER_URL_2x } = constants;

function onRequestVideoClick(event) {
  const currentTargetElement = event.target;
  const id = Number(currentTargetElement.getAttribute('id'));
  fetchMovieTreiler(id);
}

function btnTransformIfMovieAddToWatched() {
  if (!modalBtnWatched.classList.contains('is-active')) {
    modalBtnWatched.textContent = 'remove from watched';
    modalBtnWatched.classList.add('is-active');
  } else {
    return;
  }
}

function btnTransformIfMovieRomoveFromWatched() {
  if (modalBtnWatched.classList.contains('is-active')) {
    modalBtnWatched.classList.remove('is-active');
    modalBtnWatched.textContent = 'add to watched';
  } else {
    return;
  }
}

function btnTransformIfMovieAddToQueue() {
  if (!modalBtnQueue.classList.contains('is-active')) {
    modalBtnQueue.textContent = 'remove from queue';
    modalBtnQueue.classList.add('is-active');
  } else {
    return;
  }
}

function btnTransformIfMovieRemovFromQueue() {
  if (modalBtnQueue.classList.contains('is-active')) {
    modalBtnQueue.classList.remove('is-active');
    modalBtnQueue.textContent = 'add to queue';
  };
}

function onModalBtnWatchedClick(e) {
  const id = localStorage.getItem('id');
  if (!watched.includes(id)) {
    watched.push(id);
    setWatchedLocalStoradge(watched);
    notifyInfo(addWatched);
    btnTransformIfMovieAddToWatched(e)
  }
  else {
    watched.splice(watched.indexOf(id), 1);
    setWatchedLocalStoradge(watched);
    notifyInfo(removeWatched);
    btnTransformIfMovieRomoveFromWatched(e);
    if (!librarySectionWatched.classList.contains('is-hidden')) {
      const watchedIdArr = getWatchedLocalStoradge();
      fetchLibraryWatch(watchedIdArr);
    } else {
      return;
    }
  }
} 

function onModalBtnQueueClick(e) {
  const id = localStorage.getItem('id');
  if (!queue.includes(id)) {
    queue.push(id);
    setQueueLocalStoradge(queue);
    notifyInfo(addQueue);
    btnTransformIfMovieAddToQueue(e);
  } else {
    queue.splice(queue.indexOf(id), 1);
    setQueueLocalStoradge(queue);
    notifyInfo(removeQueue);
    btnTransformIfMovieRemovFromQueue(e);
    if (!librarySectionQueue.classList.contains('is-hidden')) {
      const queueIdArr = getQueueLocalStoradge();
      fetchLibraryQueue(queueIdArr);
    } else {
      return;
    }
  }
}

function renderModalWindow(response) {
  modalImgContainer.innerHTML = '';
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
  modalImgContainer.insertAdjacentHTML('afterbegin', markupImg);
  
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
    modalBtnWatched.textContent = 'remove from watched';
    modalBtnWatched.classList.add('is-active');
  } else {
    modalBtnWatched.textContent = 'add to watched';
    modalBtnWatched.classList.remove('is-active');

  }

  if (queue.includes(getMovieId)) {
    modalBtnQueue.textContent = 'remove from queue';
    modalBtnQueue.classList.add('is-active');
  } else {
    modalBtnQueue.textContent = 'add to queue';
    modalBtnQueue.classList.remove('is-active');
  }

  const requestVideo = document.querySelector('.modal__request-video');
  requestVideo.addEventListener('click', onRequestVideoClick);

  modalBtnWatched.addEventListener('click', onModalBtnWatchedClick);
  modalBtnQueue.addEventListener('click', onModalBtnQueueClick);
}

export default renderModalWindow;
