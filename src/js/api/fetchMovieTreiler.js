import axios from 'axios';
import constants from '../constants';
import renderMovieTreiler from '../renderMovieTreiler';
import { loadingShow, loadingRemove } from '../utils/loading';

const { API_KEY, MODAL_WINDOW_URL } = constants;

async function fetchMovieTreiler(id) {
  loadingShow();
  await axios
    .get(`${MODAL_WINDOW_URL}/${id}?api_key=${API_KEY}&append_to_response=videos&language=uk-US`)
    .then(function (response) {
      renderMovieTreiler(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}


export default fetchMovieTreiler;


