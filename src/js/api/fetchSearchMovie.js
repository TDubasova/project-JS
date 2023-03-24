import axios from 'axios';
import constants from '../../js/constants';
import renderSearchMovie from '../../js/renderSearchMovie';
import { loadingShow, loadingRemove } from '../utils/loading';

const { API_KEY, SEARCH_MOVIE_URL } = constants;

async function fetchSearchMovie(page, searchValue) {
  loadingShow();
  await axios
    .get(
      `${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${searchValue}&page=${page}&adult=false`
    )
    .then(function (response) {
      localStorage.setItem('totalPage', response.data.total_pages);
        renderSearchMovie(response);
        loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchSearchMovie;
