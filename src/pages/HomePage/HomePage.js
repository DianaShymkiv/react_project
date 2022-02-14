import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import {MoviesList} from "../../components";
import css from './HomePage.module.css';
import {filmService, genreService} from "../../services";


const HomePage = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
        try {
            const {results, page, total_pages, total_results} = await filmService.getAll();
            return results;

        } catch (e) {
            console.log(e);
        }
    }

    const fetchGenres = async () => {
        try {

            const {genres} = await genreService.getAll();
            return genres;

        } catch (e) {
            console.log(e);
        }
    }

    const fetchMovieData = async () => {

        const request = [fetchMovies(), fetchGenres()];
        try {
            setIsLoading(true);
            const [movies, genres] = await Promise.all(request);

            const mergedGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenreList = genre_ids.map(genreId => genres.find(value => value.id === genreId));

                return {
                    ...movie,
                    movieGenreList,
                }
            })

            setMoviesList(mergedGenresMovies);

        } catch (e) {
            console.error(e);
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieData()
    }, [])

    const renderLoadingIndicator = () => (
        <div className={css.loading}>Loading...</div>
    )


    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <MoviesList value={moviesList}/>}

        </div>
    );
};


export {HomePage};