import axios from 'axios';
import constants from '../../js/constants';
import renderModalWindow from '../../js/renderModalWindow';
import { loadingShow, loadingRemove } from '../utils/loading';

const { API_KEY, MODAL_WINDOW_URL } = constants;

async function fetchModalWindow(id) {
  loadingShow();
  await axios
    .get(`${MODAL_WINDOW_URL}/${id}?api_key=${API_KEY}`)
    .then(function (response) {
      renderModalWindow(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default fetchModalWindow;
