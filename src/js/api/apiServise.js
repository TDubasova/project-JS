import pagination from '../utils/tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchTopMovie from './fetchTopMovie';
import fetchSearchMovie from './fetchSearchMovie';
import refs from '../../js/refs';

const { searchForm } = refs;

async function loadTopMovies() {
    await fetchTopMovie(page = 1);
    localStorage.removeItem("query");
}

const getSearchMovie = (event) => {
    event.preventDefault();
    let value = event.currentTarget.elements.searchQuery.value;
    if (value === undefined) {
        fetchTopMovie(page = 1);
        return;
    } else {
        fetchSearchMovie(page = 1, value);
        localStorage.setItem('query', event.currentTarget.elements.searchQuery.value);
        pagination.reset();
    }
    return value;
}

searchForm.addEventListener('submit', getSearchMovie);

export default loadTopMovies;