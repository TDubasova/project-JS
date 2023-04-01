import axios from 'axios';
import constants from '../constants';
import renderTopMovie from '../renderTopMovie';
import renderSearchMovie from '../../js/renderSearchMovie';
import renderMovieTreiler from '../renderMovieTreiler';
import renderLibraryQueue from '../renderLibraryQueue';
import renderLibraryWatch from '../renderLibraryWatch';
import renderModalWindow from '../../js/renderModalWindow';
import { loadingShow, loadingRemove } from '../utils/loading';

const { TOP_MOVIE_URL, SEARCH_MOVIE_URL, MODAL_WINDOW_URL, API_KEY } =
  constants;

export async function fetchTopMovie() {
  loadingShow();
  await axios
    .get(`${TOP_MOVIE_URL}?api_key=${API_KEY}&page=1&adult=false`)
    .then(function (response) {
      localStorage.setItem('totalPage', response.data.total_pages);
      renderTopMovie(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function fetchTopMovieNext(page) {
  loadingShow();
  await axios
    .get(`${TOP_MOVIE_URL}?api_key=${API_KEY}&page=${page}&adult=false`)
    .then(function (response) {
      loadingRemove();
      localStorage.setItem('totalPage', response.data.total_pages);
      renderTopMovie(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function fetchSearchMovie(page, searchValue) {
  loadingShow();
  await axios
    .get(
      `${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${searchValue}&page=${page}&language=en-US&adult=false`
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

export async function fetchMovieTreiler(id) {
  loadingShow();
  await axios
    .get(`${MODAL_WINDOW_URL}/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(function (response) {
      renderMovieTreiler(response);
      loadingRemove();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function fetchLibraryQueue(array) {
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
  renderLibraryQueue(resultData);
  loadingRemove();
}

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

export async function fetchModalWindow(id) {
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
