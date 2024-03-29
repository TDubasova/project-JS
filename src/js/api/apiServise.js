import pagination from '../utils/tui-pagination';
import { fetchTopMovie, fetchSearchMovie } from './fetch';
import refs from '../../js/refs';

const { searchForm } = refs;

function loadTopMovies() {
  fetchTopMovie();
  localStorage.removeItem('query');
}

const getSearchMovie = event => {
  event.preventDefault();
  let value = event.currentTarget.elements.searchQuery.value;
  if (value === undefined) {
    fetchTopMovie();
    return;
  } else {
    let page = 1;
    fetchSearchMovie(page, value);
    localStorage.setItem(
      'query',
      event.currentTarget.elements.searchQuery.value
    );
    pagination.reset();
  }
  return value;
};

searchForm.addEventListener('submit', getSearchMovie);

export default loadTopMovies;
