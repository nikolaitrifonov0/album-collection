import styles from './Navigation.module.css';
import Search from './Search';

export default function Navigation() {   

    return (
        <nav>
            <article className={styles.left}>
                <h1 className={styles.logo}><a href="#">AlbumTracker</a></h1>
                <ul className={styles.buttons}>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                </ul>
            </article>     
            <Search/>
        </nav>
    );
}