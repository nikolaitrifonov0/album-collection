import styles from './FrontPage.module.css'

export default function FrontPage() {
    return (
      <section className={styles.intro}>
          <h1>Keep track of your favourite albums and your thoughts about them.</h1>
          <h2>Get started by <a>Creating your account</a>, or <a>Logging in</a>.</h2>
      </section>
    );
  }