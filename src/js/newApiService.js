import axios from 'axios';
import constants from './constants';

const { BASE_URL, API_KEY } = constants;

export default class ApiService {
    constructor() {
        this.responceTopMovies = '';
        this.moviePoster = '';
        this.page = 1;
    }

    async getTopMovies() {
        const config = {
            params: {
                language: 'uk-US',
                page: `${this.page}`,
            },
        };
        try {
            const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`,
                config);
            this.page += 1;
            this.responceTopMovies = response.data;
            return this.responceTopMovies;
        } catch (error) {
            console.log(error);
        }
    }

}


// import axios from 'axios';

// const MAIN_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '7944ae355bdc42ac579681e106149d6b';

// export async function getTrending(page = 1) {
//   const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => console.log(error));
// }

// export async function getByKeyword(query, page) {
//   const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => console.log(error));
// }

// export async function getInfoMovie(movie_id) {
//   const url = `${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {});
// }

// export async function getVideos(movie_id) {
//   const url = `${MAIN_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data.results;
//     })
//     .catch(error => {});
// }

// export async function getArrayofMovies(array) {
//   const arrayOfMovies = array.map(async movie_id => {
//     return await axios
//       .get(`${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
//       .then(response => {
//         return response.data;
//       })
//       .catch(error => console.log(error));
//   });

//   const resultData = await Promise.all(arrayOfMovies);
//   return resultData;
// }
