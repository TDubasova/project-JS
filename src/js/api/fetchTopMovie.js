import axios from 'axios';
import constants from '../constants';
import renderTopMovie from '../renderTopMovie';
import { loadingShow, loadingRemove } from '../utils/loading';

const { TOP_MOVIE_URL, API_KEY } = constants;

async function fetchTopMovie() {
  loadingShow();
  await axios
    .get(
      `${TOP_MOVIE_URL}?api_key=${API_KEY}&page=1&adult=false`
    )
    .then(function (response) {
      localStorage.setItem('totalPage', response.data.total_pages);
      renderTopMovie(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchTopMovie;
