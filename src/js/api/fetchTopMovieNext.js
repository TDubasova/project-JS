import axios from 'axios';
import renderTopMovie from '../renderTopMovie';
import constants from '../constants';

const { TOP_MOVIE_URL, API_KEY} = constants;

export async function fetchTopMovieNext(page) {
    let url = TOP_MOVIE_URL;
    const config = {
        params: {
            api_key: `${API_KEY}`,
            language: 'uk-US',
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
    

export default fetchTopMovieNext;