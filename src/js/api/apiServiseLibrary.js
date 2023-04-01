import refs from '../../js/refs';
import { fetchLibraryWatch, fetchLibraryQueue } from './fetch';
import { watched, queue } from '../localStorageService';

const {
  libraryNotMovieConteiner,
  libraryBtnWatched,
  libraryBtnQueue,
  librarySectionWatched,
  librarySectionQueue,
  intro,
} = refs;

function onLibraryBtnWatchedClick(e) {
  btnIsActive(e);
  if (watched.length === 0) {
    showMovieConteiner();
  } else {
    librarySectionQueue.classList.add('is-hidden');
    libraryNotMovieConteiner.classList.add('is-hidden');
    librarySectionWatched.classList.remove('is-hidden');
    fetchLibraryWatch(watched);
  }
  btnIsNotActive(libraryBtnQueue);
}

function onLibraryBtnQueueClick(e) {
  btnIsActive(e);
  if (queue.length === 0) {
    showMovieConteiner();
  } else {
    librarySectionQueue.classList.remove('is-hidden');
    librarySectionWatched.classList.add('is-hidden');
    libraryNotMovieConteiner.classList.add('is-hidden');
    fetchLibraryQueue(queue);
  }
  btnIsNotActive(libraryBtnWatched);
}

function btnIsActive(e) {
  const currentTargetElement = e.currentTarget;
  if (currentTargetElement) {
    currentTargetElement.classList.add('header-library__btn--active');
  }
}

function btnIsNotActive(element) {
  element.classList.remove('header-library__btn--active');
}

function showMovieConteiner() {
  removeMessage();
  libraryNotMovieConteiner.classList.remove('is-hidden');
  librarySectionWatched.classList.add('is-hidden');
  librarySectionQueue.classList.add('is-hidden');
  libraryNotMovieConteiner.classList.contains('is-hidden')
    ? removeMessage()
    : addMessage();
}

let showMessage;
let noShowMessage;
function addMessage() {
  showMessage = setInterval(() => {
    intro.classList.add('go');
    console.log(1);
  }, 0);
  noShowMessage = setInterval(() => {
    intro.classList.remove('go');
    console.log(2);
  }, 8000);
}

function removeMessage() {
  clearInterval(showMessage);
  clearInterval(noShowMessage);
}

libraryBtnWatched.addEventListener('click', onLibraryBtnWatchedClick);
libraryBtnQueue.addEventListener('click', onLibraryBtnQueueClick);
