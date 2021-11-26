import { Link } from 'react-router-dom';
import styles from './FrontPage.module.css'

export default function FrontPage() {
    return (
      <section className={styles.intro}>
          <h1>Keep track of your favourite albums and your thoughts about them.</h1>
          <h2>Get started by <Link to='/register'>Creating your account</Link>, or <Link to='/login'>Logging in</Link>.</h2>
      </section>
    );
  }