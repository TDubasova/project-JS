import axios from 'axios';
import constants from '../../js/constants';
import renderModalWindow from '../../js/renderModalWindow';

const { API_KEY, MODAL_WINDOW_URL} = constants;

export function fetchModalWindow(id) {
    axios.get(`${MODAL_WINDOW_URL}/${id}?api_key=${API_KEY}&language=uk-US`)
    .then(function (response) {
        renderModalWindow(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

export default fetchModalWindow;