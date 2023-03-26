import pagination from '../utils/tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchLibraryWatch from './fetchLibraryWatch';
import fetchLibraryQueue from './fetchLibraryQueue';
import refs from '../../js/refs';
import { watched, queue } from '../localStorageService';

const { libraryNotMovieConteiner, libraryBtnWatched, libraryBtnQueue, librarySectionWatched, librarySectionQueue } = refs;

function onLibraryBtnWatchedClick(e) {
    btnIsActive(e);
    if (watched.length === 0) {
        libraryNotMovieConteiner.classList.remove('is-hidden');
        librarySectionWatched.classList.add('is-hidden');
        librarySectionQueue.classList.add('is-hidden');
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
        libraryNotMovieConteiner.classList.remove('is-hidden');
        librarySectionWatched.classList.add('is-hidden');
        librarySectionQueue.classList.add('is-hidden');
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
        currentTargetElement.classList.add('header-library__btn--active')
    } 
}
    
function btnIsNotActive(element) {
    element.classList.remove('header-library__btn--active')
}

libraryBtnWatched.addEventListener('click', onLibraryBtnWatchedClick);
libraryBtnQueue.addEventListener('click', onLibraryBtnQueueClick)










