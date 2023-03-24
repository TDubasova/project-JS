import refs from './refs';

const { mainHeaderLibraryLink, libraryHeaderConteiner, mainGalleryConteiner, libraryMain, tuiPagination } = refs;

function onMainHeaderLibraryLinkClick() {
    if (!mainHeaderLibraryLink) {
        return;
    }
    libraryHeaderConteiner.classList.remove('is-hidden');
    mainGalleryConteiner.classList.add('is-hidden');
    libraryMain.classList.remove('is-hidden');
    tuiPagination.classList.add('is-hidden');
}


mainHeaderLibraryLink.addEventListener('click', onMainHeaderLibraryLinkClick)