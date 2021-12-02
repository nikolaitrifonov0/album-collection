export default function Comment({ review }) {
    return (
        <li>
           <article>
           <h3>{review.username}</h3>
            <h3>Rating: {review.rating}</h3>
           </article>   
           <p>{review.comment}</p>        
        </li>
    );
}