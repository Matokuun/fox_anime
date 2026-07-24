import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAnimeByID } from "../../services/AnimeService";
import AnimeDescription from "../../components/AnimeDescription/AnimeDescription";
import './AnimeDetails.css'

export default function AnimeDetails(){
    const [anime, setAnime] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        async function searchAnimeByID(){
            const fullAnime= await getAnimeByID(id);
            setAnime(fullAnime);
        }
        searchAnimeByID();
    }, [id])

    return (
        <>
            {(anime.width == 0) ? <h2 className="loading">Loading...</h2> : <AnimeDescription anime={anime} />}
        </>
    )
}