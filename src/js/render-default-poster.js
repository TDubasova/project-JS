import constants from './constants';

const { POSTER_URL_1x } = constants;

function renderDefaultPoster(poster_path) {
    if (!poster_path || poster_path === 0) {
        return `https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png' alt="default photo"`;
    } else {
        return `${POSTER_URL_1x}/${poster_path}`;
    }
}

export default renderDefaultPoster;