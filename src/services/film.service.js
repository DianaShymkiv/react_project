import {axiosService} from "./axios.service";
import {api_key, urls} from "../config/urls";

export const filmService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getByTitle: (id) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data),
    getByGenre: (id) => axiosService.get(`${urls.movie}?api_key=${api_key}&page=1&with_genres=${id}`).then(value => value.data),
    getSimilarById: (id) => axiosService.get(`${urls.movie}/${id}/similar`).then(value => value.data)

}