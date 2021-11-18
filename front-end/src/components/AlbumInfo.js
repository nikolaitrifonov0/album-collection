import { useEffect } from "react";
import { getAlbum, albumSearch } from "../services/spotify";

export default function AlbumInfo({ match }) {
    const id = match.params.id;
    
    console.log(getAlbum(id));    

    return (
      <section>
          <h1>Keep track of your favourite albums and your thoughts about them.</h1>
          <h2>Get started by <a>Creating your account</a>, or <a>Logging in</a>.</h2>
      </section>
    );
  }