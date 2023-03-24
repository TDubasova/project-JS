import pagination from '../utils/tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchLibraryWatch from './fetchLibraryWatch';
import fetchLibraryQueue from './fetchLibraryQueue';
import refs from '../../js/refs';
import { getWatchedLocalStoradge, getQueueLocalStoradge } from '../localStorageService';

const { libraryBtnWatched, libraryBtnQueue, librarySectionWatched, librarySectionQueue } = refs;

function onLibraryBtnWatchedClick(e) {
    btnIsActive(e);

    librarySectionQueue.classList.add('is-hidden');
    librarySectionWatched.classList.remove('is-hidden');

    const watchedIdArr = getWatchedLocalStoradge();
    fetchLibraryWatch(watchedIdArr);
    
    btnIsNotActive(libraryBtnQueue);
}

function onLibraryBtnQueueClick(e) {
    btnIsActive(e)

    librarySectionQueue.classList.remove('is-hidden');
    librarySectionWatched.classList.add('is-hidden');

    const queueIdArr = getQueueLocalStoradge();
    fetchLibraryQueue(queueIdArr);

    btnIsNotActive(libraryBtnWatched);
}

function btnIsActive(e) {
    const currentTargetElement = e.currentTarget;
    if (currentTargetElement) {
        currentTargetElement.style.backgroundColor = '#FF6B01';
        currentTargetElement.style.boxShadow = '0px 8px 43px 0px rgba(255, 107, 1, 0.6)';
    } 
}
    
function btnIsNotActive(element) {
    element.style.backgroundColor = 'inherit';
    element.style.boxShadow = 'none';
}

libraryBtnWatched.addEventListener('click', onLibraryBtnWatchedClick);
libraryBtnQueue.addEventListener('click', onLibraryBtnQueueClick)
