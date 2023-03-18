import axios from 'axios';
import renderTopMovie from '../renderTopMovie';
import constants from '../constants';

const { TOP_MOVIE_URL, API_KEY } = constants;

async function fetchTopMovieNext(page) {
  await axios
    .get(`${TOP_MOVIE_URL}?api_key=${API_KEY}&language=uk-US&page=${page}`)
    .then(function (response) {
      renderTopMovie(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchTopMovieNext;
