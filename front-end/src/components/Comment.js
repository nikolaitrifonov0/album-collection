import styles from './Comment.module.css'

export default function Comment({ review }) {
    return (
        <li className={styles.review}>
        <article className={styles.header}>
           <h3>{review.username}</h3>
            <h3>Rating: {review.rating}</h3>
           </article>   
           <p className={styles.comment}>{review.comment}</p>        
        </li>
    );
}