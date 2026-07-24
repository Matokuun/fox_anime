import { Route, Routes, BrowserRouter} from 'react-router-dom';

import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import AnimeDetails from '../pages/animeDetails/AnimeDetails';
import Favorites from '../pages/favorites/Favorites';
import Layout from '../components/Layout/Layout';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function AppRouter(){
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='favorites' element={<Favorites />} />
                    <Route path='anime/:id' element={<AnimeDetails />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}