import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {Genres} from "../../components";
import {genreService} from "../../services";
import css from './MovieByGenrePage.module.css';

const MovieByGenrePage = () => {
    const [genres, setGenres] = useState([]);

    useEffect(()=> {
       genreService.getAll().then(({genres}) => setGenres(genres));
    },[]);
    console.log(genres)

    return (
        <div>
            <div className={css.flex}>
                {genres && genres.map(value => <Genres key={value.id} genres={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MovieByGenrePage};