import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SearchResults from "../SearchResults/SearchResults";
import './Layout.css';

export default function Layout(){
    const {search} = useContext(SearchContext);
    
    return (
        <div className="layout">
            <NavBar/>
            <main className="layout-content">
                {search.trim() ? <SearchResults /> : <Outlet />}
            </main>
            <Footer />
        </div>
        
    )
}