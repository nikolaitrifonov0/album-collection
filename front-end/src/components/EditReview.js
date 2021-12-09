import styles from './ReviewAlbum.module.css';

export default function EditReview() {
    return (
        <form className={styles.reviewForm}>
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