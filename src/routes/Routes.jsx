import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Layout from '../components/Layout/Layout';
import Jugadores from '../pages/Jugadores/Jugadores';

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
                <Route path='/jugadores' element={<Layout><Jugadores/></Layout>}/>
            </ReactDomRoutes>
        </BrowserRouter>
    )
}

export default Routes