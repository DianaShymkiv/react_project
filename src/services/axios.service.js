import axios from "axios";
import {baseURL} from "../config/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWRmNWEyZGZmNWM3N2Q4NDM2YmY5MmFmYjFmMzJlZCIsInN1YiI6IjYyMDE3YTcyZDM0ZWIzMDA2YjYxN2JhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.noS3qqBJF-6rL1hDw2pl4_D4dG04VCAJMHqBSaOEq48'
    }

});
