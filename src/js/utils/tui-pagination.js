import Pagination from '../../../node_modules/tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchTopMovieNext from '../api/fetchTopMovieNext';
import fetchSearchMovie from '../api/fetchSearchMovie';
import refs from '../refs';

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
        behavior: "smooth"
        });
});

pagination.on('beforeMove', (event, value) => {
        const page = event.page;
        if (localStorage.getItem('query') === null) {
                fetchTopMovieNext(page);
        } else {
                value = localStorage.getItem('query');
                fetchSearchMovie(page, value);
        } 
});

export default pagination;
