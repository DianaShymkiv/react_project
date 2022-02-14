import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const genreService = {
    getAll: () => axiosService.get(urls.genres).then(value => value.data),
    getById: (id)=> axiosService.get(`${urls.genres}/${id}`).then(value => value.data)

}