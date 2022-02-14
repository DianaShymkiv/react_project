import {useNavigate} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

const MoviesList = ({value}) => {
    const navigate = useNavigate();

    const onFilmClick = (movie) => {
        navigate(`/movie/${movie.id}/${movie.original_title}`)
    }

    return (
        <div className={css.flex}>
            {value.map(value => (
                <div key={value.id} onClick={()=> onFilmClick(value)} className={css.moviesWrapper}>
                    <MoviesListCard {...value}/>
                </div>
            ))}
        </div>
    );
};

export {MoviesList};