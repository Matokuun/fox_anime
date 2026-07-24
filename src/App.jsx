import { FavoritesProvider } from './context/FavoritesProvider'
import { SearchProvider } from './context/SearchProvider'
import ThemeProvider from './context/ThemeProvider'
import AppRouter from './router/AppRouter'


function App() {
    return (
        <>
            <ThemeProvider>
            <FavoritesProvider>
            <SearchProvider>
                <AppRouter />
            </SearchProvider>
            </FavoritesProvider>
            </ThemeProvider>
        </>
    )
}

export default App
