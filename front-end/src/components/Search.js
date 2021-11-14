import styles from './Search.module.css'
import { albumSearch } from '../services/spotify';
import { useState } from 'react'; 
import SearchResult from './SearchResult';

export default function Search() {
    let [results, setResults] = useState([]);    
    async function onSearchBarInput(e) {
        let input = e.target.value;

        if (input.length >= 3) {
            setResults(await albumSearch(input));
            console.log(results);
        }
        else {
            setResults([]);
        }
    }

    return (
        <article className={styles.search}>
            <input type="text" className={styles.searchField} onInput={onSearchBarInput}/>
            <section className={styles.searchResults} style={results.length > 0 ? {display: 'block'} : {display: 'none'}}>
                {results.map(result => <SearchResult key={result.id} id={result.id} name={result.name} artists={result.artists} image={result.image}/>)}
            </section>      
        </article>
    );
}