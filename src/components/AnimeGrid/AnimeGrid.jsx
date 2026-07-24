import { useContext } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import './AnimeGrid.css';
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

export default function AnimeGrid({animes}){
    const {setSearch} = useContext(SearchContext);

    function handleNavigation(){
        setSearch("");
    }

    return(
        <div className="animeGrid">
            {animes.map(anime => 
                <Link key={anime.mal_id} to={`/anime/${anime.mal_id}`} onClick={handleNavigation} className="animeCardLink">
                    <AnimeCard image={anime.images.jpg.large_image_url} title={anime.title} score={anime.score} />
                </Link>
            )}
        </div>
    )
}