import React from 'react'
import { JugadorContainer, JugadorEstadisticaCampaña, JugadorEstadisticasItem, JugadorEstadisticasItems, JugadorEstadisticasWrapper, JugadorEstadisticaTitulo, JugadorInfoContainer, JugadorInfoGeneral, JugadorInfoItem, JugadorInfoNombre, JugadorInfoWrapper, JugadorWrapper } from './JugadorStyles'
import { URL_IMAGES } from '../../utils/constants'
import { useJugador, useJugadorEstadisticas } from '../../hooks/api/useJugadores';
import { useParams } from 'react-router-dom';
import { TbRectangleVerticalFilled } from 'react-icons/tb';
import { BiFootball } from 'react-icons/bi';
import { formatearFecha } from '../../utils/formatearFecha';
import Skeleton from 'react-loading-skeleton';

const Jugador = () => {
    const id_jugador = parseInt(useParams().id_jugador, 10);
    const { data: jugador, error: jugadorError, isLoading: jugadorLoading} = useJugador(id_jugador);
    const { data: jugadorEstadisticas, error: jugadorEstadsticasicError, isLoading: jugadorEstadisticasLoading} = useJugadorEstadisticas(id_jugador);

    // Skeleton
    if (jugadorLoading) {
        return (
            <JugadorContainer>
                <JugadorWrapper>
                    <JugadorInfoContainer>
                        <JugadorInfoWrapper>
                            <Skeleton width={100} height={100} borderRadius={'100%'}/>
                            <JugadorInfoNombre> 
                                <h1><Skeleton width={250} height={24}/></h1>   
                                <h2><Skeleton width={70} height={14}/></h2>   
                            </JugadorInfoNombre>      
                        </JugadorInfoWrapper>
                        <JugadorInfoGeneral>
                            <JugadorInfoItem>
                                <div className="nac">
                                    <Skeleton width={15} height={15} borderRadius={'100%'}/>
                                    <span><Skeleton width={70} height={14}/></span>
                                </div>         
                                <p><Skeleton width={70} height={12}/></p>
                            </JugadorInfoItem>
                            <JugadorInfoItem>
                                <span><Skeleton width={70} height={14}/></span>
                                <p><Skeleton width={70} height={12}/></p>
                            </JugadorInfoItem>
                            <JugadorInfoItem>
                                <span><Skeleton width={70} height={14}/></span>
                                <p><Skeleton width={70} height={12}/></p>
                            </JugadorInfoItem>
                            <JugadorInfoItem>
                                <span><Skeleton width={70} height={14}/></span>
                                <p><Skeleton width={70} height={12}/></p>
                            </JugadorInfoItem>
                        </JugadorInfoGeneral>
                    </JugadorInfoContainer>
                </JugadorWrapper>
            </JugadorContainer>
        );
    }   

    return (
        <JugadorContainer>
            <JugadorWrapper>
                <JugadorInfoContainer>
                    <JugadorInfoWrapper>
                        <img 
                            src={`${URL_IMAGES}jugadores/${jugador.src}`} 
                            alt="Jugador"
                            onError={(e) => { e.target.src = `${URL_IMAGES}jugadores/player-default.png`; }}
                        /> 
                        <JugadorInfoNombre>
                            <h1>{jugador?.nombre} <span>{jugador?.apellido}</span></h1>   
                            <h2>{jugador?.posicion}</h2>   
                        </JugadorInfoNombre>      
                    </JugadorInfoWrapper>
                    <JugadorInfoGeneral>
                        <JugadorInfoItem>
                            <div className="nac">
                                <img src={`${URL_IMAGES}banderas/${jugador?.nacionalidad}.png`}/> 
                                <span>{jugador?.ciudad}, {jugador?.provincia}.</span>
                            </div>         
                            <p>Nacionalidad</p>
                        </JugadorInfoItem>
                        <JugadorInfoItem>
                            <span>{formatearFecha(jugador?.fecha_nacimiento)}</span>
                            <p>Fecha de nacimiento</p>
                        </JugadorInfoItem>
                    </JugadorInfoGeneral>
                </JugadorInfoContainer>
                
                <JugadorEstadisticasWrapper>
                    {
                        jugadorEstadisticas?.map((j) => (
                            <JugadorEstadisticaCampaña>
                                <JugadorEstadisticaTitulo>{j.torneo} {j.temporada}</JugadorEstadisticaTitulo>
                                <JugadorEstadisticasItems>
                                    <JugadorEstadisticasItem>
                                        <span>{j.pj}</span>
                                        <p>Partidos</p>
                                    </JugadorEstadisticasItem>
                                    <JugadorEstadisticasItem>
                                        <span>{j.pj_titular}</span>
                                        <p>Titular</p>
                                    </JugadorEstadisticasItem>
                                    <JugadorEstadisticasItem>
                                        <div className="tarjeta">
                                            <BiFootball />
                                            <span>{j.goles}</span>
                                        </div>
                                        <p>Goles</p>
                                    </JugadorEstadisticasItem>
                                    <JugadorEstadisticasItem>
                                        <div className="tarjeta">
                                            <BiFootball className='red' />
                                            <span>"0"</span>
                                        </div>
                                        <p>Goles en contra</p>
                                    </JugadorEstadisticasItem>
                                    <JugadorEstadisticasItem>
                                        <div className="tarjeta">
                                            <TbRectangleVerticalFilled className='red'/>
                                            <span>{j.rojas}</span>
                                        </div>
                                        <p>Tarjetas rojas</p>
                                    </JugadorEstadisticasItem>
                                    <JugadorEstadisticasItem>
                                        <div className="tarjeta">
                                            <TbRectangleVerticalFilled className='yellow'/>
                                            <span>{j.amarillas}</span>
                                        </div>
                                        <p>Tarjetas amarillas</p>
                                    </JugadorEstadisticasItem>
                                </JugadorEstadisticasItems>
                            </JugadorEstadisticaCampaña>
                        ))
                    }
                </JugadorEstadisticasWrapper>
            </JugadorWrapper>
        </JugadorContainer>
    )
}

export default Jugador