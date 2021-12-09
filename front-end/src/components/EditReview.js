import { useHistory } from 'react-router';
import { useEffect, useState, useContext } from 'react/cjs/react.development';
import AuthenticationContext from '../contexts/AuthenticationContext';
import { editAlbumReview, getOneReview } from '../services/database';
import styles from './ReviewAlbum.module.css';

export default function EditReview({ match }) {
    const history = useHistory();
    const userId = useContext(AuthenticationContext);
    let [review, setReview] = useState({});

    useEffect(() => {      
        getOneReview(match.params.id)
        .then(res => setReview(res));
    }, [match.params.id]);

    function changeRating(e) {
        setReview({...review, rating: e.target.value});
    }

    function editReviewHandler(e) {
        e.preventDefault(); 
        
        if (review.userId != userId) {
            history.push('/');
        } else {
            let formData = new FormData(e.currentTarget);

            editAlbumReview(review.id, review.albumId, review.userId, formData.get('comment'), formData.get('rating'))
            .then(() => history.push(`/details/${review.albumId}`));
        }
    }

    return (
        <form className={styles.reviewForm} onSubmit={editReviewHandler}>
         <label className={styles.label} htmlFor='rating'>Your Rating:</label>         
         <select name='rating' id='rating' value={review.rating} onChange={changeRating}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
        </select>
        <label className={styles.label} htmlFor='comment'>Your Review:</label>
        <textarea id='comment' name='comment' rows='5' defaultValue={review.comment}/>
        <input type='submit' value='Edit Review' className='button' />         
     </form>
    );
}