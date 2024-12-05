import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
const Layout = ({children}) => {
    return (
        <LayoutContainerStyled>
            <Navbar/>
            {children}
        </LayoutContainerStyled>
    )
}

export default Layout
