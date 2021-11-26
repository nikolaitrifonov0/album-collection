import styles from './Register.module.css'

export default function Register({ history }) {
    function registerSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        fetch('https://localhost:5001/authentication/register', {
            method:'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
            })        
        })
        .then(() => {
            history.push('/');
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