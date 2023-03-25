import refs from './refs';

const { galleryContainer } = refs;

export default function clearGalleryContainer() {
  galleryContainer.innerHTML = '';
}
