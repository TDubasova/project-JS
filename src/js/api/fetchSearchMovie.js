import axios from 'axios';
import constants from '../../js/constants';
import renderTopMovie from '../../js/renderTopMovie';

const { API_KEY, SEARCH_MOVIE_URL } = constants;

async function fetchSearchMovie(page, searchValue) {
  await axios
    .get(
      `${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${searchValue}&page=${page}`
    )
    .then(function (response) {
      renderTopMovie(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchSearchMovie;
