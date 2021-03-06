import { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import AuthenticationContext from "../contexts/AuthenticationContext";
import { getCollection } from "../services/database";
import { getImage } from "../services/spotify";
import styles from './Collection.module.css';

export default function Collection() {
    const userId = useContext(AuthenticationContext);
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function fetchCollection() {
            let ids = await getCollection(userId);

            let res = [];
            
            for (const id of ids) {
                res.push({
                    url: `/details/${id}`,
                    img: await getImage(id)
                });
            }

            setAlbums(res);
        }
        fetchCollection();
    }, [userId]);

    return (
        <ul className={ styles.albums }>
            {
                albums?.map(a => <li key={a.url} className={styles.album}><Link to={a.url}><img src={a.img} alt='Album Cover'/></Link></li>)
            }
        </ul>
    );
}