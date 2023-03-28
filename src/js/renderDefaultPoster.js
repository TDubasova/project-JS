import constants from './constants';

const { POSTER_URL_1x } = constants;

function renderDefaultPoster(poster_path) {
  if (!poster_path || poster_path === 0 || poster_path === null) {
    return `https://cdn.pixabay.com/photo/2016/03/31/18/39/generic-1294538_960_720.png' alt="default photo"`;
  } else {
    return `${POSTER_URL_1x}/${poster_path}`;
  }
}

export default renderDefaultPoster;
