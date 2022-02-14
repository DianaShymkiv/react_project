import css from './MovieListCard.module.css';

const MoviesListCard = (props) => {
    const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenreList} = props;

    return (
        <div className={css.wrap}>
            <div className={css.img}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}/>
            </div>
            <div>
                <p className={css.text}>{original_title}</p>
                {/*<h3>*/}
                {/*    {movieGenreList.map(({name, id}, i) => (*/}
                {/*        <span key={id}>{name} {i < movieGenreList.length - 1 && '-'}</span>*/}
                {/*    ))}*/}
                {/*</h3>*/}
                {/*<div>Rating: {vote_average} {vote_count}</div>*/}
                {/*<p>{overview}</p>*/}
                {/*<div>Release date: {release_date}</div>*/}
            </div>
        </div>
    );
};

export {MoviesListCard};