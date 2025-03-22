import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Layout from '../components/Layout/Layout';
import Partidos from '../pages/Partidos/Partidos';
import Partido from '../pages/Partido/Partido';
import Jugadores from '../pages/Jugadores/Jugadores';
import Jugador from '../pages/Jugador/Jugador';

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
                <Route path='/partidos' element={<Layout><Partidos/></Layout>}/>
                <Route path='/partidos/:equipos/:id_partido' element={<Layout><Partido/></Layout>}/>
                <Route path='/jugadores' element={<Layout><Jugadores/></Layout>}/>
                <Route path='/jugadores/:id_jugador' element={<Layout><Jugador/></Layout>}/>
            </ReactDomRoutes>
        </BrowserRouter>
    )
}

export default Routes