import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }){
    const [favorites, setFavorites] = useState([]);
    
    function addFavorite(anime){
        if (!isFavorite(anime.mal_id))
            setFavorites(prev => [...prev, anime]);
    }

    function removeFavorite(id){
        setFavorites(favorites.filter(favorite => favorite.mal_id !== id));
    }

    function isFavorite(id){
        return favorites.some(favorite => favorite.mal_id === id);
    }

    useEffect(() => {
        const favs= localStorage.getItem('favorites');
        if (favs) {
            setFavorites(JSON.parse(favs));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return(
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}