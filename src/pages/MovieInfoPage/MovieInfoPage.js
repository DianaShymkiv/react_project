import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {MovieInfo} from "../../components";
import {filmService} from "../../services";

const MovieInfoPage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();

    useEffect(()=> {
        filmService.getByTitle(id).then(value => setMovie({...value}));
    },[id]);

    return (
        <div>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};