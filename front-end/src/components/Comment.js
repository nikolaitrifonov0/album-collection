import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Comment.module.css'
import AuthenticationContext from '../contexts/AuthenticationContext';
import { likeReview } from '../services/database';
import { useState } from 'react/cjs/react.development';

export default function Comment({ review }) {
    const userId = useContext(AuthenticationContext);
    let [isLiked, setLike] = useState(review.liked.some(l => l == userId));

    function likeHandler(e) {
        e.preventDefault();
        likeReview(review.id, userId)
        .then(() => setLike(!isLiked));
    }

    function showLike() {
        if (isLiked) {
            return <li><a className={styles.buttons} onClick={likeHandler}><FontAwesomeIcon icon={faHeart}/></a></li>;
        } 

        return <li><a className={styles.buttons} onClick={likeHandler}><FontAwesomeIcon icon={farHeart}/></a></li>;
    }

    const modifyButtons = <ul className={styles.buttons}>
        <li><Link to={`/edit/${review.id}`}><FontAwesomeIcon icon={faEdit}/></Link></li>
        <li><Link to={`/delete/${review.id}`}><FontAwesomeIcon icon={faTimesCircle}/></Link></li>
    </ul>;        

    return (
        <li className={styles.review}>
        <article className={styles.header}>
            <h3>{review.username}</h3>
            <h3 className={styles.rating}>Rating: {review.rating}</h3>
            
            {
                userId && review.userId == userId 
                ? modifyButtons
                : null
            }            
            
            {
                userId 
                ? showLike()
                : null
            }

            <span className={styles.likes}>{review.liked.length} likes</span>
           </article>   
           <p className={styles.comment}>{review.comment}</p>        
        </li>
    );
}