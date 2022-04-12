import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaults } from 'axios';
import GlobalStyle from './style/globalStyle';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NotFound from './pages/404';
import Forbidden from './pages/403';

defaults.baseURL = 'http://192.168.0.102:3001';
//defaults.baseURL = 'https://api-ohnotes.herokuapp.com';
defaults.headers.common.Authorization = `Bearer ${ localStorage.getItem("token") }`;
defaults.headers.post['Content-Type'] = 'application/json';

render (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> }></Route>
                <Route path="/notes/:id" element={ <Notes /> }></Route>
                <Route path="/403" element={ <Forbidden /> } ></Route>
                <Route path="*" element={ <NotFound /> } ></Route>
            </Routes>
        </BrowserRouter>
    </>,
    document.querySelector('#root')
);
