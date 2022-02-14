import css from './SimilarMovie.module.css';

const SimilarMovie = (props) => {
    const {original_title, poster_path} = props;

    return (
        <div>
            <div className={css.img}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}/>
            </div>
            <div>
                <p className={css.text}>{original_title}</p>
            </div>
        </div>
    );
};

export {SimilarMovie};