import { useHistory } from 'react-router-dom';
import styles from './SearchResult.module.css'

export default function SearchResult({ id, name, artists, image }) {
    const history = useHistory();

    function goToAlbumPage(e) {
        e.preventDefault();
        let results = e.currentTarget.parentElement;
        results.style.display = 'none';

        history.push(`/details/${id}`);
    }

    return(
        <a to={`/details/${id}`} onClick={goToAlbumPage}>
            <article className={styles.result}>
                <img src={image} className={styles.image}/>
                <div>
                    <h3>{name}, {artists}</h3>
                </div>
            </article>
        </a>
    );
}