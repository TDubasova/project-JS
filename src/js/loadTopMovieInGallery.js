import ApiService from './newApiService';
import { genresList } from './jenresList';
import clearGalleryContainer from './clearGalleryConreiner';
import drawMovieCard from './drawMovieCard';

const apiService = new ApiService();

function getTopMovieCollection() {
  clearGalleryContainer();
  apiService.getTopMovies().then(responceTopMovies => {
    drawMovieCard(responceTopMovies, genresList);
  });
}

getTopMovieCollection();