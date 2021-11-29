import { useHistory } from 'react-router';
import styles from './Register.module.css';
import request from '../services/request';

export default function Login({ authenticate }) {
    const history = useHistory();
    const loginUrl = 'https://localhost:5001/authentication/login';
    const headers = { "content-type": "application/json" };

    function loginSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        request(loginUrl, 'post', 
        headers,
        JSON.stringify({
            'username': formData.get('username'),
            'password': formData.get('password')            
        })
        )
        .then((res) => {
            if (res.id) {
                history.push('/');
                authenticate(res.id);
            }            
        });
    }

    return (
     <form className={styles.register} onSubmit={loginSubmitHandler}>
         <label htmlFor='username'>Username:</label>
         <input id='username' name='username' className={styles.username}/>
         <label htmlFor='password'>Password:</label>
         <input type='password' name='password' id='password' className={styles.password}/>
         <input type='submit' value='Login' className={styles.registerBtn}/>         
     </form>
    );
  }