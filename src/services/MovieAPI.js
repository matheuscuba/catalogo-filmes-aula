import axios from 'axios';
import qs from 'qs';

const MovieAPI = {};

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '70a22f39b4d34a9ca28a61e62494380b';

MovieAPI.searchMovies = (title) => {

    let params = {
        api_key: API_KEY,
        language: 'pt-BR',
        query: title
    };

    return axios.get(`${URL}/search/movie?${qs.stringify(params)}`);
}

export default MovieAPI;