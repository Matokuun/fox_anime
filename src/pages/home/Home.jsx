import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import './Home.css';
import { useState, useEffect } from "react";
import { getTopAnime } from "../../services/AnimeService";

export default function Home(){
    const [animes, setAnimes]= useState([])

    useEffect(() => {
        async function chargeAnimes(){
            const ani= await getTopAnime();
            //console.log(ani);
            setAnimes(ani);
        }
        
        chargeAnimes();
        
    }, [])

    return (
        <>
            <h1 className="title">Recommended animes</h1>
            <AnimeGrid animes={animes}/>
        </>
    )
}