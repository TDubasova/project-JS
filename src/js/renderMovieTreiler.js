import * as basicLightbox from 'basiclightbox';
import { notifyFilure } from './utils/notify';
import { defaultTreiler } from './message-list';

function renderMovieTreiler(response) {
  const requestVideo = document.querySelector('.modal__request-video');
  if (response.data.results.length === 0) {
    requestVideo.classList.add('is-hidden');
    notifyFilure(defaultTreiler);
    return;
  } else {
    const key = response.data.results[0].key;
    const instance = basicLightbox.create(`
        <iframe src='https://www.youtube.com/embed/${key}' 
            width="560" height="315" frameborder="0" 
            title='YouTube video player' 
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
            style='border:none; border-radius:5px;'
            allowfullscreen>
        </iframe>`);
    instance.show();
  }
}

export default renderMovieTreiler;
