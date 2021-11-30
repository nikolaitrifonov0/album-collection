import { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthenticationContext from '../contexts/AuthenticationContext';
import request from '../services/request';
import styles from './ReviewAlbum.module.css'

export default function ReviewAlbum( {match} ) {
    const history = useHistory();
    const userId = useContext(AuthenticationContext);

    const headers = { "content-type": "application/json" };
    const reviewUrl = 'https://localhost:5001/albums/review';

    function reviewAlbumHandler(e) {
        e.preventDefault();

        if (userId) {
            let formData = new FormData(e.currentTarget);

            request(reviewUrl, 'post', 
            headers,
            JSON.stringify({
                'albumId' : match.params.id,
                'userId': userId,
                'rating': formData.get('rating'),
                'comment': formData.get('comment')            
            })
            )
            .then(() => {            
                history.push('/');                                 
            });
        } else {
            history.push('/login');
        }
    }

    return (
     <form className={styles.reviewForm} onSubmit={reviewAlbumHandler}>
         <label className={styles.label} htmlFor='rating'>Your Rating:</label>         
         <select name='rating' id='rating'>
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
        <textarea id='comment' name='comment' rows='5' />
        <input type='submit' value='Add Review' className='button' />         
     </form>
    );
  }