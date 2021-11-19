import { useEffect, useState } from "react";
import { getAlbum } from "../services/spotify";
import styles from './AlbumInfo.module.css'

function calculateDuration(duration) {
  const milisecondsInMinute = 60000;
  const milisecondsInSecond = 1000;

  let minutes = Math.floor(duration / milisecondsInMinute);
  let seconds = Math.floor((duration - minutes * milisecondsInMinute) / milisecondsInSecond);

  return `${minutes}:${seconds}`;
}

export default function AlbumInfo({ match }) {
    const [album, setAlbum] = useState({});
    
    useEffect(async () => {
      setAlbum(await getAlbum(match.params.id));
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
          {album.tracks?.map(track => 
              (
                <tr key={track.id}>
                  <td>{track.name}</td>
                  <td>{calculateDuration(track.duration)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>      
    );
  }