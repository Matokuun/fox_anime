import { useContext } from 'react'
import AnimeGrid from '../../components/AnimeGrid/AnimeGrid'
import { FavoritesContext } from '../../context/FavoritesContext'
import './Favorites.css';

export default function Favorites(){
    const { favorites } = useContext(FavoritesContext);

    return (
        <>
            <h1 className="title">Favorites</h1>
            { favorites.length === 0 ? <h2 className='not-content'>There aren't favorites yet</h2> : <AnimeGrid animes={favorites}></AnimeGrid>}
        </>
    )
}