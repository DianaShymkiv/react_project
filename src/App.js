import {Route, Routes} from 'react-router-dom';

import './App.css';
import {Layout} from "./Layout";
import {HomePage, MovieByGenrePage, MovieInfoPage, MoviesByTheGenreIdPage} from "./pages";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie/:id/:original_title'} element={<MovieInfoPage/>}/>
                    <Route path={'genres'} element={<MovieByGenrePage/>}>
                        <Route path={':id'} element={<MoviesByTheGenreIdPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
