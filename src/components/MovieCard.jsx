import styles from "./MovieCard.module.css"
import { Link } from "react-router-dom";
export const MovieCard = ({movie}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <div className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
            <li>
            <img width={230} height={345} src={imageUrl} alt={movie.title} className={styles.movieImage}/>
            
            </li>
            </Link>
            <div className={styles.title}>{movie.title}</div>
        </div>
    );
};

