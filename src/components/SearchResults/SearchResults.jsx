import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import AnimeGrid from "../AnimeGrid/AnimeGrid";
import './SearchResults.css';


export default function SearchResults(){
    const {search, results} = useContext(SearchContext);

    return(
        <>
            <h1 className="title">Results for: {search}</h1>
            {(results.length) ? <AnimeGrid animes={results} /> : <h2 className="no-results">No results</h2>}
        </>
    )
}