import pagination from '../utils/tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchTopMovie from './fetchTopMovie';
import fetchTopMovieNext from './fetchTopMovieNext';
import fetchSearchMovie from './fetchSearchMovie';
import refs from '../../js/refs';

// let page = JSON.parse(localStorage.getItem('page')) || 1;
const { searchForm } = refs;
// const debounce = require('lodash.debounce');

async function loadTopMovies() {
    await fetchTopMovie(page = 1);
}

const getSearchMovie = (event) => {
    const value = event.currentTarget.elements.searchQuery.value;
    console.log(value)
    if (!value) {
        fetchTopMovie(page = 1);
        return;
    } else {
        event.preventDefault();
        fetchSearchMovie(page = 1, value);
        localStorage.setItem('query', value);
        localStorage.setItem('page', 1);
    }
    return value;
}

searchForm.addEventListener('submit', getSearchMovie);



// function getSearchMovieNextPage(page) {
    const searchValue = localStorage.getItem('query');
    const currentPage = localStorage.getItem('page');
//     fetchSearchMovie(currentPage += 1, searchValue);
//     localStorage.setItem('query', value);
//     localStorage.setItem('page', currentPage += 1);
    
// }

function usePagination(event, searchValue) {
    page = event.page;
    // localStorage.setItem('page', JSON.stringify(page))
    if (searchValue) {
        // searchForm.removeEventListener('submit', getSearchMovie);
        // getSearchMovieNextPage(page);
       
        fetchSearchMovie(event.page, searchValue);
        
        return;
    };

    if (!searchValue) {
    fetchTopMovieNext(event.page);
    };
};

pagination.on('afterMove', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

pagination.on('beforeMove', (event) => {
    usePagination(event);
});


export default loadTopMovies;