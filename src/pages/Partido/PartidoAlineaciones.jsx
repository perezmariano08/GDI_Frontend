import React from 'react'
import { PartidoAlineacionesContainer, PartidoAlineacionFila, PartidoAlineacionIncidencia, PartidoAlineacionIncidenciasWrapper, PartidoAlineacionJugador, PartidoAlineacionJugadorDetalle, PartidoAlineacionJugadorLink, PartidoAlineacionJugadorNombre, PartidoAlineacionLista, PartidoAlineacionTitulo, PartidoAlineacionWrapper } from './PartidoStyles'
import { URL_IMAGES } from '../../utils/constants'
import { BiFootball } from "react-icons/bi";
import { usePartidoAlineaciones, usePartidoCambios } from '../../api/partidos/usePartidos';
import { TbRectangleVerticalFilled } from 'react-icons/tb';
import { HiArrowLeftCircle } from 'react-icons/hi2';
import { formatearSlugJugador } from '../../utils/utils';

const PartidoAlineaciones = ({id_partido, id_equipo, dt, incidencias}) => {
    console.log(id_equipo);
    
    const { data: alineaciones, error: alineacionesError, isLoading: alineacionesLoading} = usePartidoAlineaciones(id_partido);
    const { data: cambios, isLoading: cambiosLoading} = usePartidoCambios(id_partido);
    const alineacion_equipo = alineaciones?.filter((a) => a.id_equipo === id_equipo) || []
    const goles = incidencias?.filter((i) => i.tipo === "G") || [];
    const amarillas = incidencias?.filter((i) => i.tipo === "A") || [];
    const rojas = incidencias?.filter((i) => i.tipo === "R") || [];
    

    return (
        <PartidoAlineacionesContainer>        
            <PartidoAlineacionWrapper>
                <PartidoAlineacionTitulo>
                    <span>Alineación titular</span>
                </PartidoAlineacionTitulo>
                <PartidoAlineacionLista>
                    { 
                        alineacion_equipo
                        .filter((a) => a.condicion === "T")
                        .map((a) => {
                            const JugadorComponent = a.id_jugador ? PartidoAlineacionJugadorLink : PartidoAlineacionJugador;
                            const jugadorSlug = formatearSlugJugador(a.nombre, a.apellido);
                            return (
                                <PartidoAlineacionFila key={a.dorsal}>
                                    <JugadorComponent to={a.id_jugador && `/jugadores/${jugadorSlug}/${a.id_jugador}`}>
                                        {
                                            a.id_jugador ? <img 
                                                src={`${URL_IMAGES}jugadores/${a.src}`} 
                                                alt="Jugador"
                                                onError={(e) => { e.target.src = `${URL_IMAGES}jugadores/player-default.png`; }}
                                            /> : <img 
                                                src={`${URL_IMAGES}jugadores/player-default.png`} 
                                                alt="Jugador"
                                            />
                                        }
                                        <span>{a.dorsal}</span>
                                        <PartidoAlineacionJugadorDetalle>
                                            <PartidoAlineacionJugadorNombre>
                                                {a.nacionalidad && <img src={`${URL_IMAGES}banderas/${a.nacionalidad}.png`} alt={a.nacionalidad} />}
                                                <h4>{a.nombre} <strong>{a.apellido}</strong></h4>
                                            </PartidoAlineacionJugadorNombre>
                                            {a.posicion && <h5>{a.posicion}</h5>}
                                        </PartidoAlineacionJugadorDetalle>
                                    </JugadorComponent>
                                    <PartidoAlineacionIncidenciasWrapper>
                                        {(() => {
                                            // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                            const golesJugador = goles?.filter((c) => 
                                                (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );
                                            
                                            return golesJugador?.map((i, index) => (
                                                <PartidoAlineacionIncidencia key={index} className={i.en_contra === "S" && 'red'}>
                                                    <BiFootball />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                        {(() => {
                                            // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                            const rojasJugador = rojas?.filter((c) => 
                                                (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );
                                            return rojasJugador?.map((incidencia, index) => (
                                                <PartidoAlineacionIncidencia key={index} className='red'>
                                                    <TbRectangleVerticalFilled />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                        {(() => {
                                            // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador                                                        
                                            const cambioJugador = cambios?.filter((c) => 
                                                (a.id_jugador && a.id_equipo !== 66 ? c.id_jugador_entrante === a.id_jugador : c.dorsal_entrante === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );

                                            return cambioJugador?.map((c, index) => (
                                                <PartidoAlineacionIncidencia key={index} className='green'>
                                                    <span>{c.minuto}'</span>
                                                    <HiArrowLeftCircle />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                        {(() => {
                                            // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                            const cambioJugador = cambios?.filter((c) => 
                                                (a.id_jugador ? c.id_jugador_saliente === a.id_jugador : c.dorsal_saliente === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );                                                    

                                            return cambioJugador?.map((c, index) => (
                                                <PartidoAlineacionIncidencia key={index} className='red'>
                                                    <span>{c.minuto}'</span>
                                                    <HiArrowLeftCircle />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                    </PartidoAlineacionIncidenciasWrapper>
                                </PartidoAlineacionFila>
                            );
                        })
                    }
                </PartidoAlineacionLista>
            </PartidoAlineacionWrapper>
            <PartidoAlineacionWrapper>
                <PartidoAlineacionTitulo>
                    <span>Suplentes</span>
                </PartidoAlineacionTitulo>
                <PartidoAlineacionLista>
                    { 
                        alineacion_equipo
                        .filter((a) => a.condicion !== "T")
                        .map((a) => {
                            const JugadorComponent = a.id_jugador ? PartidoAlineacionJugadorLink : PartidoAlineacionJugador;
                            const jugadorSlug = formatearSlugJugador(a.nombre, a.apellido);
                            return (
                                <PartidoAlineacionFila key={a.dorsal}>
                                    <JugadorComponent to={a.id_jugador && `/jugadores/${jugadorSlug}/${a.id_jugador}`}>
                                        {
                                            a.id_jugador ? <img 
                                                src={`${URL_IMAGES}jugadores/${a.src}`} 
                                                alt="Jugador"
                                                onError={(e) => { e.target.src = `${URL_IMAGES}jugadores/player-default.png`; }}
                                            /> : <img 
                                                src={`${URL_IMAGES}jugadores/player-default.png`} 
                                                alt="Jugador"
                                            />
                                        }
                                        
                                        <span>{a.dorsal}</span>
                                        <PartidoAlineacionJugadorDetalle>
                                            <PartidoAlineacionJugadorNombre>
                                                {a.nacionalidad && <img src={`${URL_IMAGES}banderas/${a.nacionalidad}.png`} alt={a.nacionalidad} />}
                                                <h4>{a.nombre} <strong>{a.apellido}</strong></h4>
                                            </PartidoAlineacionJugadorNombre>
                                            {a.posicion && <h5>{a.posicion}</h5>}
                                        </PartidoAlineacionJugadorDetalle>
                                    </JugadorComponent>
                                    <PartidoAlineacionIncidenciasWrapper>
                                        {(() => {
                                            // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                            const golesJugador = goles?.filter((c) => 
                                                (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );
                                            
                                            return golesJugador?.map((i, index) => (
                                                <PartidoAlineacionIncidencia key={index} className={i.en_contra === "S" && 'red'}>
                                                    <BiFootball />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                        {(() => {
                                            // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                            const rojasJugador = rojas?.filter((c) => 
                                                (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );
                                            return rojasJugador?.map((incidencia, index) => (
                                                <PartidoAlineacionIncidencia key={index} className='red'>
                                                    <TbRectangleVerticalFilled />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                        {(() => {
                                            // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador                                                        
                                            const cambioJugador = cambios?.filter((c) => 
                                                (a.id_jugador && a.id_equipo !== 66 ? c.id_jugador_entrante === a.id_jugador : c.dorsal_entrante === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );

                                            return cambioJugador?.map((c, index) => (
                                                <PartidoAlineacionIncidencia key={index} className='green'>
                                                    <span>{c.minuto}'</span>
                                                    <HiArrowLeftCircle />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                        {(() => {
                                            // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                            const cambioJugador = cambios?.filter((c) => 
                                                (a.id_jugador ? c.id_jugador_saliente === a.id_jugador : c.dorsal_saliente === a.dorsal) 
                                                && c.id_equipo === id_equipo
                                            );                                                    

                                            return cambioJugador?.map((c, index) => (
                                                <PartidoAlineacionIncidencia key={index} className='red'>
                                                    <span>{c.minuto}'</span>
                                                    <HiArrowLeftCircle />
                                                </PartidoAlineacionIncidencia>
                                            ));
                                        })()}
                                    </PartidoAlineacionIncidenciasWrapper>
                                </PartidoAlineacionFila>
                            );
                        })
                    }
                </PartidoAlineacionLista>
            </PartidoAlineacionWrapper>
            {
                dt && <PartidoAlineacionWrapper>
                        <PartidoAlineacionTitulo>
                            <span>Entrenador</span>
                        </PartidoAlineacionTitulo>
                        <PartidoAlineacionLista>
                            <PartidoAlineacionFila>
                                <PartidoAlineacionJugador>
                                    <img src={`${URL_IMAGES}jugadores/player-default.png`} alt="Jugador" />
                                    <span>DT</span>
                                    <PartidoAlineacionJugadorDetalle>
                                        <PartidoAlineacionJugadorNombre>
                                        {(() => {
                                            const [apellido, nombre] = dt.split(", ").map(s => s.trim());
                                            return <h4>{nombre} <strong>{apellido}</strong></h4>;
                                        })()}
                                        </PartidoAlineacionJugadorNombre>
                                    </PartidoAlineacionJugadorDetalle>
                                </PartidoAlineacionJugador>
                                
                            </PartidoAlineacionFila>
                        </PartidoAlineacionLista>
                    </PartidoAlineacionWrapper>
            }
        </PartidoAlineacionesContainer>
    )
}

export default PartidoAlineaciones