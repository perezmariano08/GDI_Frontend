import React from 'react'
import { JugadorContainer, JugadorInfoWrapper, JugadorWrapper } from './JugadorStyles'
import { URL_IMAGES } from '../../utils/constants'
import { useJugador } from '../../hooks/api/useJugadores';
import { useParams } from 'react-router-dom';

const Jugador = () => {
    const id_jugador = parseInt(useParams().id_jugador, 10);
    const { data: jugador, error: jugadorError, isLoading: jugadorLoading} = useJugador(id_jugador);

    console.log(jugador);
    
    return (
        <JugadorContainer>
            <JugadorWrapper>
                <JugadorInfoWrapper>
                    <img src={`${URL_IMAGES}jugadores/50.jpg`} alt="Jugador" /> 
                    <h1>{jugador?.nombre_completo}</h1>               
                </JugadorInfoWrapper>
            </JugadorWrapper>
        </JugadorContainer>
    )
}

export default Jugador