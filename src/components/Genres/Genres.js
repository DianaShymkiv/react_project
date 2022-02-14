import {Link} from "react-router-dom";

import css from './Genres.module.css';

const Genres = ({genres}) => {
    const {id, name} = genres;
    console.log(id)

    return (
        <div>
            <Link to={id.toString()} className={css.genre}> {name} </Link>
        </div>
    );
};

export {Genres};