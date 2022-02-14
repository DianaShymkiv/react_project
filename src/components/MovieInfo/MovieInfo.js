import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import css from './MovieInfo.module.css';
import {filmService} from "../../services";
import {SimilarMovie} from "../SimilarMovie/SimilarMovie";

const MovieInfo = ({movie}) => {
    const {id} = useParams();
    const [similarMovie, setSimilarMovie] = useState([]);
    const navigate = useNavigate();
    const {
        original_title,
        popularity,
        runtime,
        overview,
        production_countries,
        release_date,
        vote_average,
        vote_count,
        genres,
        poster_path
    } = movie;
    console.log(movie);

    useEffect(() => {
        filmService.getSimilarById(id).then(value => setSimilarMovie(value.results))
    }, [id])

    const onFilmClick = (movie) => {
        navigate(`/movie/${movie.id}/${movie.original_title}`)
    }

    return (
        <div>
            <div className={css.wrap}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={original_title}
                         className={css.img}/>
                </div>
                <div className={css.text}>
                    <div><h1>{original_title}</h1></div>
                    <div><h4>Release date: {release_date}</h4></div>
                    <div><h4>Runtime: {runtime}</h4></div>
                    <div>
                        <h4>Country: {production_countries && production_countries.map(value => value.iso_3166_1)}</h4>
                    </div>
                    <div>
                        <h4>Genre: {genres && genres.map((value, index) => <span
                            key={value.id}>{value.name} {index < genres.length - 1 && ' , '}</span>)}</h4>
                    </div>
                    <div><h4>{`${vote_average}/${vote_count}`}</h4></div>
                    <div><p>{overview}</p></div>
                </div>
            </div>
            <div className={css.films}>
                {similarMovie && similarMovie.map(value => (
                    <div onClick={() => onFilmClick(value)}  className={css.card}>
                        <SimilarMovie key={value.id} {...value}/>
                    </div>)
                )}
            </div>
        </div>
    );
};

export {MovieInfo};