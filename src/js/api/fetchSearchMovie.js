import axios from 'axios';
import constants from '../../js/constants';
import renderTopMovie from '../../js/renderTopMovie';
import { loadingShow, loadingRemove } from '../utils/loading';

const { API_KEY, SEARCH_MOVIE_URL } = constants;

async function fetchSearchMovie(page, searchValue) {
  loadingShow();
  await axios
    .get(
      `${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${searchValue}&page=${page}&adult=false`
    )
    .then(function (response) {
      renderTopMovie(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchSearchMovie;
