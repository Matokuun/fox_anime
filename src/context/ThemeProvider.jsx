import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }){
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode(){
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if(savedTheme === "dark"){
            setDarkMode(true);
        }
    }, [])

    useEffect(() => {
        if(darkMode){
            document.body.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            document.body.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [darkMode])

    return(
        <ThemeContext.Provider value={{darkMode , toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}