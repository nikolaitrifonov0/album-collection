import { Link , useHistory} from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Comment.module.css'
import AuthenticationContext from '../contexts/AuthenticationContext';
import { deleteReview, likeReview } from '../services/database';

export default function Comment({ review }) {
    const history = useHistory();

    function likeHandler(e) {
        e.preventDefault();
        likeReview(review.id, userId);
    }

    const modifyButtons = <ul className={styles.buttons}>
        <li><Link to={`/edit/${review.id}`}><FontAwesomeIcon icon={faEdit}/></Link></li>
        <li><Link to={`/delete/${review.id}`}><FontAwesomeIcon icon={faTimesCircle}/></Link></li>
        <li><a onClick={likeHandler}><FontAwesomeIcon icon={faHeart}/></a></li>
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