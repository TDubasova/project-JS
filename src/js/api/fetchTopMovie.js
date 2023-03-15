import axios from 'axios';
import constants from '../constants';
import renderTopMovie from '../renderTopMovie';

const { TOP_MOVIE_URL, API_KEY} = constants;

export async function fetchTopMovie() {
    let url = TOP_MOVIE_URL;
    const config = {
        params: {
            api_key: `${API_KEY}`,
            language: 'uk-US',
            page: '1',
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

export default fetchTopMovie;