import axios from 'axios';
import constants from '../../js/constants';
import renderTopMovie from '../../js/renderTopMovie';
import { getSearchValue } from '../api/apiServise';
import refs from '../../js/refs';

const { API_KEY, SEARCH_MOVIE_URL, DEBOUNCE_DELAY} = constants;

// const { inputSearchForm } = refs;

// const debounce = require('lodash.debounce');

// // searchBtn.addEventListener('submit', onSearchBtnSubmit);
// inputSearchForm.addEventListener('input', debounce(getSearchValue, DEBOUNCE_DELAY));

// export function getSearchValue(event) {
//     const searchValue = event.target.value.trim();
//     return searchValue;
// }

// function onSearchBtnSubmit(event, searchValue) {
//     console.log(searchValue)
//     event.preventDefault();
//     fetchSearchMovie(page, searchValue);
// }

export async function fetchSearchMovie(page, searchValue) {
    const url = SEARCH_MOVIE_URL;
    const config = {
        params: {
            api_key: `${API_KEY}`,
            language: 'uk-US',
            query: `${searchValue}`, 
            page: `${page}`,
        },
    };
    try {
        const response = await axios.get(url, config);

        renderTopMovie(response);
    }
    catch (error) {
        console.log(error);
        return Promise.reject(error);
    } 
}

export default fetchSearchMovie;