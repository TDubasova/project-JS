import refs from './refs';
import { notifyFilure } from './utils/notify';

const { modalImgConteiner } = refs;

function renderMovieTreiler(response) {
    const requestVideo = document.querySelector('.modal__request-video');
    if (response.data.videos.results.length === 0) {
        requestVideo.classList.add('is-hidden');
        const message = 'Sorry, there is no trailer to watch!'
        notifyFilure(message);
        return;
    } else {
        markupMovieTreiler(response);
    }
}

function markupMovieTreiler(response) {
    const key = response.data.videos.results[0].key;    
    const markupVideo = [
            `<iframe
                class='film__trailer'
                width="375"
                height="478"
                src='https://www.youtube.com/embed/${key}'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
            ></iframe>`
    ].join('');
    modalImgConteiner.innerHTML = markupVideo;
}

export default renderMovieTreiler;
