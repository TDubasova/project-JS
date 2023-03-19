import Pagination from '../../../node_modules/tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchTopMovieNext from '../api/fetchTopMovieNext';
import fetchSearchMovie from '../api/fetchSearchMovie';
import refs from '../refs';
import { loadingShow, loadingRemove } from '../utils/loading';

const { inputSearchForm } = refs;

inputSearchForm.addEventListener('input', onInputSearchFormInput);

function onInputSearchFormInput(event) {
  let value = event.target.value;
  return value;
}

const options = {
  usageStatistics: false,
  totalItems: 2000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
};

const pagination = new Pagination('pagination', options);

pagination.on('afterMove', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

pagination.on('beforeMove', (event, value) => {
  let page = event.page;
  if (localStorage.getItem('query') === null) {
    loadingShow();
    fetchTopMovieNext(page);
    loadingRemove();
  } else {
    value = localStorage.getItem('query');
    loadingShow();
    fetchSearchMovie(page, value);
    loadingRemove();
  }
});

export default pagination;
