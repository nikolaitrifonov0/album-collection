import styles from './Register.module.css'

export default function Register() {
    return (
     <form className={styles.register}>
         <label htmlFor='username'>Username:</label>
         <input id='username' className={styles.username}/>
         <label htmlFor='password'>Password:</label>
         <input id='password' className={styles.password}/>
         <input type='submit' value='Register' className={styles.registerBtn}/>         
     </form>
    );
  }