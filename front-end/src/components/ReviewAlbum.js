import { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthenticationContext from '../contexts/AuthenticationContext';
import { reviewAlbum } from '../services/database';
import styles from './ReviewAlbum.module.css'

export default function ReviewAlbum( {match} ) {
    const history = useHistory();
    const userId = useContext(AuthenticationContext);

    function reviewAlbumHandler(e) {
        e.preventDefault();

        if (userId) {
            let formData = new FormData(e.currentTarget);
           
            reviewAlbum(match.params.id, userId, formData.get('comment'),formData.get('rating'))
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