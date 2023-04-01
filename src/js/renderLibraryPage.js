import refs from './refs';

const {
  mainHeaderLibraryLink,
  libraryHeaderContainer,
  mainGalleryContainer,
  libraryMain,
  tuiPagination,
} = refs;

function onMainHeaderLibraryLinkClick() {
  if (!mainHeaderLibraryLink) {
    return;
  }
  libraryHeaderContainer.classList.remove('is-hidden');
  mainGalleryContainer.classList.add('is-hidden');
  libraryMain.classList.remove('is-hidden');
  tuiPagination.classList.add('is-hidden');
}

mainHeaderLibraryLink.addEventListener('click', onMainHeaderLibraryLinkClick);
