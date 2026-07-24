import { useState, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { getTop100Anime } from "../services/AnimeService";

export function SearchProvider({ children }){
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [animes, setAnimes] =useState([]);

    // Cargar catálogo inicial
    useEffect(() => {
        async function loadAnimes(){
            try{
                setError(null);
                setLoading(true);
                const data = await getTop100Anime();
                console.log("ANIMES CARGADOS:", data);
                setAnimes(data);
            }catch(e){
                setError(e.message);
            }finally{
                setLoading(false);
            }
        }
        loadAnimes();
    }, []);

    useEffect(() => {
        if(!search.trim()){
            setResults([]);
            return;
        }
        const timeout = setTimeout(() => {
            const filtered = animes.filter(anime =>
                anime.title
                .toLowerCase()
                .includes(search.toLowerCase())
            );
            console.log("BUSQUEDA:", search);
            console.log("RESULTADOS:", filtered);
            setResults(filtered);
        }, 300);
        return () => clearTimeout(timeout);
    }, [search, animes]);

    return(
        <SearchContext.Provider value={{search, setSearch, results, loading, error}}>
            {children}
        </SearchContext.Provider>
    )
}