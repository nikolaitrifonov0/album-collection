import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import Search from './Search';

export default function Navigation() {   

    return (
        <nav>
            <article className={styles.left}>
                <h1 className={styles.logo}><Link to="/">AlbumTracker</Link></h1>
                <ul className={styles.buttons}>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </ul>
            </article>     
            <Search/>
        </nav>
    );
}