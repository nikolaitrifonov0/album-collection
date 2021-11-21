import styles from './Tracklist.module.css'

function calculateDuration(duration) {
    const milisecondsInMinute = 60000;
    const milisecondsInSecond = 1000;
  
    let minutes = Math.floor(duration / milisecondsInMinute);
    let seconds = Math.floor((duration - minutes * milisecondsInMinute) / milisecondsInSecond);
  
    return `${minutes}:${seconds}`;
  }

export default function AlbumInfo({ tracks }) {
    return (
        <table className={styles.tracklist}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
          {tracks?.map(track => 
              (
                <tr key={track.id}>
                  <td className={styles.nameCol}><a href={track.url}>{track.name}</a></td>
                  <td>{calculateDuration(track.duration)}</td>
                </tr>
              ))}
          </tbody>
        </table>
    )
}