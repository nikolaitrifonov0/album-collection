import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationContext from '../contexts/AuthenticationContext';
import styles from './Navigation.module.css';
import Search from './Search';

export default function Navigation() {   
    let isAuthenticated = useContext(AuthenticationContext);
    return (
        <nav>
            <article className={styles.left}>
                <h1 className={styles.logo}><Link to="/">AlbumTracker</Link></h1>
                {
                !isAuthenticated 
                 ? <ul className={styles.buttons}>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                    : <ul className={styles.buttons}>
                        <li><Link to="/logout">Logout</Link></li>                   
                    </ul>}
            </article>     
            <Search/>
        </nav>
    );
}