import axios from 'axios';
import constants from '../constants';
import renderTopMovie from '../renderTopMovie';

const { TOP_MOVIE_URL, API_KEY } = constants;

async function fetchTopMovie() {
  await axios
    .get(`${TOP_MOVIE_URL}?api_key=${API_KEY}&language=uk-US&page=1`)
    .then(function (response) {
       renderTopMovie(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchTopMovie;
