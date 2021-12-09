import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Comment.module.css'
import AuthenticationContext from '../contexts/AuthenticationContext';

export default function Comment({ review }) {
    const modifyButtons = <ul className={styles.buttons}>
        <li><Link to={`/edit/${review.id}`}><FontAwesomeIcon icon={faEdit}/></Link></li>
        <li><Link to={`/delete/${review.id}`}><FontAwesomeIcon icon={faTimesCircle}/></Link></li>
        <li><Link to={`/like/${review.id}`}><FontAwesomeIcon icon={faHeart}/></Link></li>
    </ul>;

    const userId = useContext(AuthenticationContext);

    return (
        <li className={styles.review}>
        <article className={styles.header}>
            <h3>{review.username}</h3>
            <h3 className={styles.rating}>Rating: {review.rating}</h3>
            
            {userId && review.userId == userId 
            ? modifyButtons
            : null}
           </article>   
           <p className={styles.comment}>{review.comment}</p>        
        </li>
    );
}