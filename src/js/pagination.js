import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 5
};

const pagination = new Pagination('pagination', options);



