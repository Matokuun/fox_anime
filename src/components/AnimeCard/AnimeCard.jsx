import './AnimeCard.css';

export default function AnimeCard({ image, title, score }){
    return(
        <div className="animeCard">
            <img src={image} className="animeCard-image" alt="anime picture"></img>
            <span className='animeCard-title'>{title}</span>
            <span className='animeCard-score'>⭐ {score}</span>
        </div>
    )
}