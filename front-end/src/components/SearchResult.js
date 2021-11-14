import { Link } from 'react-router-dom';
import styles from './SearchResult.module.css'

export default function SearchResult({ id, name, artists, image }) {
    return(
        <Link to={`/details/${id}`}>
            <article className={styles.result}>
                <img src={image} className={styles.image}/>
                <div>
                    <h3>{name}, {artists}</h3>
                </div>
            </article>
        </Link>
    );
}