import axios from 'axios';
import constants from '../constants';
import { loadingShow, loadingRemove } from '../utils/loading';
import renderLibraryWatch from '../renderLibraryWatch';

const { MODAL_WINDOW_URL, API_KEY } = constants;

export async function fetchLibraryWatch(array) {
    loadingShow();
  const arrayOfMovies = array.map(async movie_id => {
    return await axios
      .get(`${MODAL_WINDOW_URL}/${movie_id}?api_key=${API_KEY}`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  });

    const resultData = await Promise.all(arrayOfMovies);
    renderLibraryWatch(resultData);
    loadingRemove();
}

export default fetchLibraryWatch;