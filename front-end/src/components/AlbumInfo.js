import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthenticationContext from "../contexts/AuthenticationContext";
import { getAlbum } from "../services/spotify";
import styles from './AlbumInfo.module.css';
import Tracklist from './Tracklist';

export default function AlbumInfo({ match }) {
    const [album, setAlbum] = useState({});
    const userId = useContext(AuthenticationContext);
    
    useEffect(() => {
      async function getData() {
        setAlbum(await getAlbum(match.params.id));
      }
      
      getData();
    }, [match.params.id]);

    return (
      <section className={styles.albumSection}>
        <article className={styles.albumInfo}>
          <img src={album.image}/>
          <article className={styles.data}>
            <h1>{album.name}</h1>
            <h1>({album.releaseDate?.substring(0, 4)})</h1>
            <h2>{album.artists}</h2>
          </article>
        </article>
        
        <Tracklist tracks={album.tracks}/>

        {
          userId
          ? <Link to={`/review/${match.params.id}`}><input type='button' value='AddReview' className='button' /></Link>
          : null
        }
      </section>      
    );
  }