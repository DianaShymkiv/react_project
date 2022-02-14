import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {filmService, genreService} from "../../services";

const MoviesByTheGenreIdPage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);

    // useEffect(() => {
    //     filmService.getByGenre(id).then(value => setMovie(value));
    // }, [id]);
    // console.log(movie)


    console.log(genre)

    return (
        <div>
            {genre &&
                <div>

                </div>
            }

        </div>
    );
};

export {MoviesByTheGenreIdPage};