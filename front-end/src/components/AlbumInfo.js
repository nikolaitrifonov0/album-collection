import { useEffect, useState } from "react";
import { getAlbum } from "../services/spotify";

export default function AlbumInfo({ match }) {
    const [album, setAlbum] = useState({});
    
    useEffect(async () => {
      setAlbum(await getAlbum(match.params.id));
      console.log(await album);
    }, [match.params.id]);

    return (
      <section>
        <article>
          <img src={album.image}/>
          <article>
            <h1>{album.name}</h1>
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
                  <td>{track.duration}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>      
    );
  }