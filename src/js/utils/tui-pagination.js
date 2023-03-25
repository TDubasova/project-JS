import Pagination from '../../../node_modules/tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import fetchTopMovieNext from '../api/fetchTopMovieNext';
import fetchSearchMovie from '../api/fetchSearchMovie';
import refs from '../refs';
import { notifyFilure } from '../utils/notify';
import { andList } from '../message-list';

const { inputSearchForm } = refs;

inputSearchForm.addEventListener('input', onInputSearchFormInput);

function onInputSearchFormInput(event) {
  let value = event.target.value;
  return value;
}

const Pagination = require('tui-pagination');

const options = {
  usageStatistics: false,
  itemsPerPage: 10,
  totalItems: 1000000,
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
  const totalPage = Number(localStorage.getItem('totalPage'));
  let page = event.page;
  if (page > totalPage) {
    notifyFilure(andList);    
  } else {
    if (localStorage.getItem('query') === null) {
      fetchTopMovieNext(page);
    } else {
      value = localStorage.getItem('query');
      fetchSearchMovie(page, value);
    }
  }
});

export default pagination;
