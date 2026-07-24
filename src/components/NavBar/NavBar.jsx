import { Link } from 'react-router-dom';
import Icono from '../../assets/img/FoxAnime.png';
import './NavBar.css';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { ThemeContext } from '../../context/ThemeContext';

export default function NavBar(){
    const {search, setSearch} = useContext(SearchContext);
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);

    function handleNavigation(){
        setSearch("");
    }

    return (
        <nav className='navBar'>
            <Link to='/' className='logo-container navBar-text' onClick={handleNavigation}>
                <img src={Icono} alt='Fox Anime icon' className='icon'/>
                <span>Fox Anime</span>
            </Link>
            <input type='search' placeholder='Search for the anime you want...' className='searchBar' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="navBar-actions">
                <button onClick={toggleDarkMode} className="theme-button">
                    {darkMode ? "☀️" : "🌙"}
                </button>
                <Link to='/favorites' className='navBar-text'  onClick={handleNavigation}>Favorites</Link>
            </div>
        </nav>
    )
}