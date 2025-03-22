import React from 'react'
import { CardPartidoContainer, CardPartidoEquipo, CardPartidoEquipos, CardPartidoResultado } from './CardPartidoStyles'
import { URL_IMAGES } from '../../../utils/constants'

const CardPartido = ({id_partido, nombre_equipo, condicion, goles_iacc, goles_rival, escudo}) => {    
    return (
        <CardPartidoContainer to={`/partidos/${id_partido}`}>
            <CardPartidoEquipos>
                {
                    condicion === "V" ? <>
                    <CardPartidoEquipo>
                        <p className='local'>{nombre_equipo}</p>
                        <img src={`${URL_IMAGES}/escudos/${escudo}`} />
                    </CardPartidoEquipo>
                    <CardPartidoResultado>
                        {goles_rival} - {goles_iacc}
                    </CardPartidoResultado>
                    <CardPartidoEquipo>
                        <img src={`${URL_IMAGES}/escudos/instituto.png`} />
                        <p>Instituto ACC</p>
                    </CardPartidoEquipo>
                    </> 
                    : <>
                    <CardPartidoEquipo>
                        <p className='local'>Instituto ACC</p>
                        <img src={`${URL_IMAGES}/escudos/instituto.png`} />
                    </CardPartidoEquipo>
                    <CardPartidoResultado>
                        {goles_iacc} - {goles_rival}
                    </CardPartidoResultado>
                    <CardPartidoEquipo>
                        <img src={`${URL_IMAGES}/escudos/${escudo}`} />
                        <p>{nombre_equipo}</p>
                    </CardPartidoEquipo>
                    </>
                }
                
            </CardPartidoEquipos>
        </CardPartidoContainer>
    )
}

export default CardPartido