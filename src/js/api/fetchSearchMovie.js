import axios from 'axios';
import constants from '../../js/constants';
import renderTopMovie from '../../js/renderTopMovie';

const { API_KEY, SEARCH_MOVIE_URL } = constants;

 

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