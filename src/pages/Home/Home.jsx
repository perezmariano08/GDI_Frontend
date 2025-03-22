import React from 'react'
import { HomeContainerStyled, HomeWrapper } from './HomeStyles'
import { Button } from 'primereact/button'

const Home = () => {
    return (
        <HomeContainerStyled>
            <HomeWrapper>
                hola
                <Button label="Check" />

            </HomeWrapper>
        </HomeContainerStyled>
    )
}

export default Home
