import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Home from './pages/Home/home'
import Filme from './pages/Filme/filme'
import Header from './components/Header'
import Error from './pages/Erro/erro'
import Favoritos from './pages/Favoritos/favoritos'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/filme/:id' element={<Filme/>} />
            <Route path='/favoritos' element={<Favoritos/>}/>




            <Route path='*' element={<Error/>} />
        </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;