import axios from 'axios';
import constants from '../constants';
import renderMovieTreiler from '../renderMovieTreiler';
import { loadingShow, loadingRemove } from '../utils/loading';

const { API_KEY, MODAL_WINDOW_URL } = constants;

async function fetchMovieTreiler(id) {
  loadingShow();
  await axios
    .get(`${MODAL_WINDOW_URL}/${id}/videos?api_key=${API_KEY}`)
    .then(function (response) {
      renderMovieTreiler(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}


export default fetchMovieTreiler;


