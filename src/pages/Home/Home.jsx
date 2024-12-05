import React from 'react'
import { HomeContainerStyled, HomeWrapper } from './HomeStyles'
import ModalVideo from '../../components/Modales/ModalVideo/ModalVideo'

const Home = () => {
    return (
        <HomeContainerStyled>
            <HomeWrapper>
                <ModalVideo/>
            </HomeWrapper>
        </HomeContainerStyled>
    )
}

export default Home
