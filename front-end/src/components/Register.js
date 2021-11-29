import { useHistory } from 'react-router';
import styles from './Register.module.css';
import request from '../services/request';

export default function Register({ authenticate }) {
    const history = useHistory();
    const registerUrl = 'https://localhost:5001/authentication/register';
    const registerHeader = { "content-type": "application/json" };

    function registerSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        request(registerUrl, 'post', 
        registerHeader,
        JSON.stringify({
            username: formData.get('username'),
            password: formData.get('password')            
        })
        )
        .then((res) => {
            history.push('/');
            authenticate(res.id);
        });
    }

    return (
     <form className={styles.register} onSubmit={registerSubmitHandler}>
         <label htmlFor='username'>Username:</label>
         <input id='username' name='username' className={styles.username}/>
         <label htmlFor='password'>Password:</label>
         <input type='password' name='password' id='password' className={styles.password}/>
         <input type='submit' value='Register' className={styles.registerBtn}/>         
     </form>
    );
  }