import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Notes from './pages/Notes';
import NotFound from './pages/404';
import Forbidden from './pages/403';

render (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> }></Route>
            <Route path="/notes/:id" element={ <Notes /> }></Route>
            <Route path="/403" element={ <Forbidden /> } ></Route>
            <Route path="*" element={ <NotFound /> } ></Route>
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);
