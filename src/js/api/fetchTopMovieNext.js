import axios from 'axios';
import refs from '../refs';
import renderTopMovie from '../renderTopMovie';
import constants from '../constants';
import { loadingShow, loadingRemove } from '../utils/loading';

const { TOP_MOVIE_URL, API_KEY } = constants;

async function fetchTopMovieNext(page) {
  loadingShow();
  await axios
    .get(
      `${TOP_MOVIE_URL}?api_key=${API_KEY}&page=${page}&adult=false`
    )
    .then(function (response) {
      loadingRemove();
      localStorage.setItem('totalPage', response.data.total_pages);
      renderTopMovie(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchTopMovieNext;
