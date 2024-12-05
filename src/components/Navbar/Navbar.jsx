import React from 'react'
import { NavbarBars, NavbarContainerStyled, NavbarList, NavbarLogo, NavbarTopContainer, NavbarTopSocial, NavbarTopWrapper, NavbarWrapper } from './NavbarStyles'
import EscudoIACC from '/Escudos/instituto.png'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <NavbarTopContainer>
                <NavbarTopWrapper>
                    <h1>golesde<span>instituto</span></h1>
                    <NavbarTopSocial>
                        <a target='_blank' href="https://www.instagram.com/golesdeinstituto/"><FaInstagram/></a>
                        <a target='_blank' href="https://www.facebook.com/golesdeinstituto/"><FaFacebookSquare/></a>
                        <a target='_blank' href="https://www.youtube.com/golesdeinstituto"><FaYoutube/></a>
                        <a target='_blank' href="https://twitter.com/goles_instituto"><FaTwitter/></a>
                    </NavbarTopSocial>
                </NavbarTopWrapper>
            </NavbarTopContainer>
            <NavbarContainerStyled>
                <NavbarWrapper>
                    <NavbarLogo>
                        <img src={EscudoIACC} alt="Escudo Instituto ACC" title='Instituto ACC' />
                    </NavbarLogo>
                    <NavbarList>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/jugadores">Jugadores</NavLink></li>
                        <li><NavLink to="/">Rivales</NavLink></li>
                        <li><NavLink to="/">titulos</NavLink></li>
                        <li><NavLink to="/">partidos</NavLink></li>
                        <li><NavLink to="/">dts</NavLink></li>
                        <li><NavLink to="/">dirigentes</NavLink></li>
                        <li><NavLink to="/">patrimonio</NavLink></li>
                        <li><NavLink to="/">contacto</NavLink></li>
                    </NavbarList>
                    <NavbarBars>
                        <HiOutlineBars3BottomRight/>
                    </NavbarBars>
                </NavbarWrapper>
            </NavbarContainerStyled>
        </>
        
    )
}

export default Navbar