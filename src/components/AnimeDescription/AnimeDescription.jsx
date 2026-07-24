import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import './AnimeDescription.css'

export default function AnimeDescription({ anime }){
    const {title, images, score, synopsis, genres, trailer, episodes, status, studios, year, season, rank, rating, mal_id} = anime;
    const {addFavorite, removeFavorite, isFavorite} = useContext(FavoritesContext);
    const favorite= isFavorite(mal_id);

    return(
        <main className="anime-details">
            <section className="anime-header">
                <img src={images?.jpg?.large_image_url} className="anime-image"/>
                <div className="anime-description">
                    <h1 className="anime-title">{title}</h1>
                    <div className="anime-genres anime-item">
                        <strong>Categories: </strong>
                        {genres?.map((genre) => (
                            <span key={genre.mal_id}>
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <p className="anime-item"><strong>Score: </strong>{score}</p>
                    <p className="anime-item"><strong>Rank: </strong>{rank}</p>
                    <p className="anime-item"><strong>Episodes: </strong>{episodes}</p>
                    <p className="anime-item"><strong>Status: </strong>{status}</p>
                    <p className="anime-item"><strong>Year: </strong>{year}</p>
                    <p className="anime-item"><strong>Season: </strong>{season}</p>
                    <p className="anime-item"><strong>Rating: </strong>{rating}</p>
                    <div className="anime-studios anime-item">
                        <strong>Studios:</strong>
                        {studios?.map(studio => (
                            <span key={studio.mal_id}>
                                {studio.name}
                            </span>
                        ))}
                    </div>
                    {favorite ? <button onClick={() => removeFavorite(mal_id)}>Remove favorite</button> : <button onClick={() => addFavorite(anime)}>Add to favorites</button>}
                </div>
            </section>
            <section className="anime-synopsis">
                <h2>Synopsis</h2>
                <article>{synopsis}</article>
            </section>
                {trailer?.embed_url && (
                    <section className="anime-trailer">
                        <h2>Trailer</h2>
                        <iframe src={trailer.embed_url} title={`${title} trailer`} allowFullScreen loading="lazy"/>
                    </section>
                )}
        </main>
    )
}