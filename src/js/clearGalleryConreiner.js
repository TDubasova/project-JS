import refs from './refs';

const { galleryConteiner } = refs;

export default function clearGalleryContainer() {
  galleryConteiner.innerHTML = '';
}
