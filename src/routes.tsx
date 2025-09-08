import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Perfil from './pages/Perfil'

const Rotas = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/perfil/:id' element={<Perfil />}/>
        </Routes>
    )
}

export default Rotas