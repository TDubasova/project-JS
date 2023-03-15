import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
        usageStatistics: false,
        totalItems: 2000,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true,
};

const pagination = new Pagination('pagination', options);

export default pagination;