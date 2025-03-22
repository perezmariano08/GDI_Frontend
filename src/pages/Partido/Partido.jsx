import React, { useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { usePartido } from '../../hooks/api/Partidos/usePartido';
import { usePartidoAlineaciones } from '../../hooks/api/Partidos/usePartidoAlineaciones';
import { PartidoAlineacionesEquipo, PartidoAlineacionesEquipoJugador, PartidoAlineacionesEquipoJugadores, PartidoAlineacionesEquipoJugadoresTitulo, PartidoAlineacionesEquipoJugadoresWrapper, PartidoAlineacionesEquipoJugadorIncidencia, PartidoAlineacionesEquipoJugadorIncidencias, PartidoAlineacionesEquipoJugadorNombre, PartidoAlineacionesEquipoJugadorNombreWrapper, PartidoAlineacionesEquipoNombre, PartidoAlineacionesEquipoTitulo, PartidoAlineacionesEquipoTituloSwitch, PartidoAlineacionesEquipoTituloWrapper, PartidoAlineacionesWrapper, PartidoContainer, PartidoDetallesArbitroEstadio, PartidoDetallesEquipo, PartidoDetallesEquipos, PartidoDetallesFecha, PartidoDetallesGoles, PartidoDetallesGolesEquipo, PartidoDetallesGolesIcono, PartidoDetallesInformacionMobile, PartidoDetallesResultado, PartidoDetallesRojasIcono, PartidoDetallesWrapper, PartidoInformacionAdicionalItem, PartidoInformacionAdicionalWrapper, PartidoWrapper } from './PartidoStyles';
import { URL_IMAGES } from '../../utils/constants';
import { PiSoccerBallFill } from "react-icons/pi";
import { formatearFecha } from '../../utils/formatearFecha';
import { usePartidoGoles } from '../../hooks/api/partidos/usePartidoGoles';
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { usePartidoCambios, usePartidosIncidencias } from '../../hooks/api/partidos/usePartidos';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PartidoMenu from './PartidoMenu';
import { motion } from "framer-motion";
import { GiWhistle } from "react-icons/gi";
import { MdOutlineStadium } from "react-icons/md";
import { TbSoccerField } from "react-icons/tb";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoMdCalendar } from "react-icons/io";


const Partido = () => {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab") || "resumen";
    const id_partido = parseInt(useParams().id_partido, 10);
    const { data: partido, error, isLoading: partidoLoading} = usePartido(id_partido);
    // Desestructuración de partido
    const {
        condicion,
        estado,
        nombre_equipo,
        escudo_equipo,
        goles_iacc,
        goles_rival,
        dt_rival,
        dt_iacc,
        fase,
        jornada,
        torneo,
        temporada,
        arbitro,
        estadio,
        dia,
        hora,
        id_equipo_rival,
    } = partido || []

    const { data: alineaciones, error: alineacionesError, isLoading: alineacionesLoading} = usePartidoAlineaciones(id_partido);
    const { data: incidencias, isLoading: incidenciasLoading} = usePartidosIncidencias(id_partido);
    const { data: cambios, isLoading: cambiosLoading} = usePartidoCambios(id_partido);
    const goles = incidencias?.filter((i) => i.tipo === "G") || [];
    const amarillas = incidencias?.filter((i) => i.tipo === "A") || [];
    const rojas = incidencias?.filter((i) => i.tipo === "R") || [];
    const [equipoSeleccionado, setEquipoSeleccionado] = useState("local"); // Estado inicial

    const id_equipo_local = condicion === "V" ?  id_equipo_rival : 66
    const id_equipo_visita = condicion !== "V" ?  id_equipo_rival : 66
    const escudo_local = condicion === "V" ?  escudo_equipo : "instituto.png"
    const escudo_visita = condicion !== "V" ?  escudo_equipo : "instituto.png"
    const goles_local = condicion === "V" ?  goles_rival : goles_iacc
    const goles_visita = condicion !== "V" ?  goles_rival : goles_iacc
    const nombre_local = condicion === "V" ?  nombre_equipo : "Instituto ACC"
    const nombre_visita = condicion !== "V" ?  nombre_equipo : "Instituto ACC"
    const alineacion_local = condicion === "V" ?  alineaciones?.filter((a) => a.id_equipo === id_equipo_rival) || [] : alineaciones?.filter((a) => a.id_equipo === 66) || []
    const alineacion_visita = condicion !== "V" ?  alineaciones?.filter((a) => a.id_equipo === id_equipo_rival) || [] : alineaciones?.filter((a) => a.id_equipo === 66) || []
    const dt_local = condicion === "V" ?  dt_rival : dt_iacc
    const dt_visita = condicion !== "V" ?  dt_rival : dt_iacc
    
    console.log(alineacion_local);
    
    // Skeleton
    if (partidoLoading || incidenciasLoading) {
        return (
            <PartidoContainer>
                <PartidoWrapper>
                    <PartidoDetallesWrapper>
                        <PartidoDetallesFecha>
                            <Skeleton width={150} height={10}/>
                            <Skeleton width={150} height={10}/>
                        </PartidoDetallesFecha>
                        <PartidoDetallesArbitroEstadio>
                            <Skeleton width={50} height={10}/>
                            <Skeleton width={50} height={10}/>
                            <Skeleton width={50} height={10}/>
                        </PartidoDetallesArbitroEstadio>
                        <PartidoDetallesEquipos>
                            <PartidoDetallesEquipo>
                                <Skeleton width={100} height={20}/>
                                <Skeleton width={40} height={40} borderRadius={'100%'}/>
                            </PartidoDetallesEquipo>
                            <PartidoDetallesResultado>
                                <Skeleton width={60} height={24}/>
                                <Skeleton width={80} height={14}/>
                            </PartidoDetallesResultado>
                            <PartidoDetallesEquipo className='visitante'>
                                <Skeleton width={100} height={20}/>
                                <Skeleton width={40} height={40} borderRadius={'100%'}/>
                            </PartidoDetallesEquipo>
                        </PartidoDetallesEquipos>
                    </PartidoDetallesWrapper>
                </PartidoWrapper>
            </PartidoContainer>
        );
    }

    console.log(goles);
    

    return (
        <PartidoContainer>
            <PartidoWrapper>
                {/* Detalles del partido */}
                <PartidoDetallesWrapper className={estado === "S" && 'suspendido'}>
                    <PartidoDetallesFecha>
                        <p>{torneo} {temporada}</p>
                        <p>{fase && `${fase} |`} {jornada}</p>
                    </PartidoDetallesFecha>
                    <PartidoDetallesArbitroEstadio>
                        <div className="item">
                            <IoMdCalendar />
                            <p>{formatearFecha(dia)}</p>
                        </div>
                        <div className="item">
                            <GiWhistle />
                            <p>{arbitro}</p>
                        </div>
                        <div className="item">
                            <TbSoccerField />
                            <p>{estadio}</p>
                        </div>
                    </PartidoDetallesArbitroEstadio>
                    <PartidoDetallesEquipos>
                        <PartidoDetallesEquipo>
                            <span>{nombre_local}</span>
                            <img src={`${URL_IMAGES}escudos/${escudo_local}`} />
                        </PartidoDetallesEquipo>
                        <PartidoDetallesResultado>
                            <span>{`${goles_local} - ${goles_visita}`}</span>
                            {estado === "F" && <p>Finalizado</p>}
                            {estado === "S" && <p>Suspendido</p>}
                        </PartidoDetallesResultado>
                        <PartidoDetallesEquipo className="visitante">
                            <span>{nombre_visita}</span>
                            <img src={`${URL_IMAGES}escudos/${escudo_visita}`} />
                        </PartidoDetallesEquipo>                        
                    </PartidoDetallesEquipos>
                    {/* Renderizar goles */}
                    {goles.length > 0 && (
                        <PartidoDetallesGoles>
                            {/* Goles del equipo local (incluye autogoles del visitante) */}
                            <PartidoDetallesGolesEquipo>
                                {goles
                                    .filter((g) =>
                                        (g.id_equipo === id_equipo_local && g.en_contra === "N") ||
                                        (g.id_equipo === id_equipo_visita && g.en_contra === "S")
                                    )
                                    .map((g) => {
                                        const nombreJugador = g.id_jugador
                                            ? `${g.apellido}, ${g.nombre}`
                                            : g.jugador;
                                        const esAutogol = g.en_contra === "S" && g.id_equipo !== id_equipo_local ? " (EC)" : "";
                                        const esPenal = g.penal === "S" ? " -p-" : "";
                                        
                                        return (
                                            <p key={`${g.id_partido}-${g.id_jugador || g.jugador}-${g.minuto}`}>
                                                {nombreJugador}{esPenal}{esAutogol} {g.minuto}'
                                            </p>
                                        );
                                    })}
                            </PartidoDetallesGolesEquipo>

                            <PartidoDetallesGolesIcono>
                                <PiSoccerBallFill />
                            </PartidoDetallesGolesIcono>

                            {/* Goles del equipo visitante (incluye autogoles del local) */}
                            <PartidoDetallesGolesEquipo className="visitante">
                                {goles
                                    .filter((g) =>
                                        (g.id_equipo === id_equipo_visita && g.en_contra === "N") ||
                                        (g.id_equipo === id_equipo_local && g.en_contra === "S")
                                    )
                                    .map((g) => {
                                        const nombreJugador = g.id_jugador
                                            ? `${g.apellido}, ${g.nombre}`
                                            : g.jugador;
                                        const esAutogol = g.en_contra === "S" && g.id_equipo !== id_equipo_visita ? " (EC)" : "";
                                        const esPenal = g.penal === "S" ? " -p-" : "";
                                        
                                        return (
                                            <p key={`${g.id_partido}-${g.id_jugador || g.jugador}-${g.minuto}`}>
                                                {g.minuto}' {nombreJugador}{esPenal}{esAutogol}
                                            </p>
                                        );
                                    })}
                            </PartidoDetallesGolesEquipo>
                        </PartidoDetallesGoles>
                    )}
                    {/* Renderizar rojas */}
                    {rojas.length > 0 && (
                        <PartidoDetallesGoles>
                            <PartidoDetallesGolesEquipo>
                                {
                                    rojas
                                    .filter((g) => g.id_equipo === id_equipo_local)
                                    .map((g) => (
                                        <p key={g.dorsal}>{g.apellido ? `${g.apellido}, ${g.nombre} ${g.minuto}'` : `${g.jugador} ${g.minuto}'`}</p>
                                    ))
                                }
                            </PartidoDetallesGolesEquipo>
                            <PartidoDetallesRojasIcono>
                                <TbRectangleVerticalFilled />
                            </PartidoDetallesRojasIcono>
                            <PartidoDetallesGolesEquipo className="visitante">
                                {
                                    rojas
                                    .filter((g) => g.id_equipo === id_equipo_visita)
                                    .map((g) => (
                                        <p key={g.dorsal}>{g.apellido ? `${g.minuto}' ${g.apellido}, ${g.nombre}` : `${g.minuto}' ${g.jugador} `}</p>
                                    ))
                                }
                            </PartidoDetallesGolesEquipo>
                        </PartidoDetallesGoles>
                    )}
                </PartidoDetallesWrapper>
                <PartidoDetallesInformacionMobile>
                    <div className="item">
                        <IoMdCalendar />
                        <p>{formatearFecha(dia)}</p>
                    </div>
                    <div className="item">
                        <GiWhistle />
                        <p>{arbitro}</p>
                    </div>
                    <div className="item">
                        <TbSoccerField />
                        <p>{estadio}</p>
                    </div>
                </PartidoDetallesInformacionMobile>
                {/* ALineaciones del partido */}
                <PartidoAlineacionesWrapper>
                    <PartidoAlineacionesEquipo>
                        {/* Switch de equipos con animación */}
                        <PartidoAlineacionesEquipoTituloWrapper>
                            <PartidoAlineacionesEquipoTitulo>{/* Indicador animado debajo de la opción seleccionada */}
                                <PartidoAlineacionesEquipoTituloSwitch 
                                    className="switch-indicator"
                                    initial={{ x: equipoSeleccionado === "local" ? "0%" : "100%" }}
                                    animate={{ x: equipoSeleccionado === "local" ? "0%" : "100%" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                                <PartidoAlineacionesEquipoNombre 
                                    className={equipoSeleccionado === "local" ? "active" : ""}
                                    onClick={() => setEquipoSeleccionado("local")}
                                >
                                    <img src={`${URL_IMAGES}escudos/${escudo_local}`} />
                                    {nombre_local}
                                </PartidoAlineacionesEquipoNombre>
                                <PartidoAlineacionesEquipoNombre 
                                className={equipoSeleccionado === "visitante" ? "active" : ""}
                                onClick={() => setEquipoSeleccionado("visitante")}
                                >
                                    <img src={`${URL_IMAGES}escudos/${escudo_visita}`} />
                                    {nombre_visita}
                                </PartidoAlineacionesEquipoNombre>
                            </PartidoAlineacionesEquipoTitulo>
                        </PartidoAlineacionesEquipoTituloWrapper>
                        {/* Contenido animado del equipo seleccionado */}
                        <PartidoAlineacionesEquipoJugadores
                            key={equipoSeleccionado}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            {equipoSeleccionado === "local" ? <>
                                <PartidoAlineacionesEquipoJugadoresTitulo>
                                    Alineación titular
                                </PartidoAlineacionesEquipoJugadoresTitulo>
                                <PartidoAlineacionesEquipoJugadoresWrapper>
                                    {
                                        alineacion_local
                                        .filter((a) => a.condicion === "T")
                                        .map((a) => (
                                            <PartidoAlineacionesEquipoJugador key={`${a.id_jugador}${a.dorsal}`}>
                                                <PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                    <img 
                                                        src={`${URL_IMAGES}jugadores/${a.id_jugador}.jpg`} 
                                                        onError={(e) => e.target.src = `${URL_IMAGES}jugadores/player-default.png`} 
                                                        alt="Jugador"
                                                    />
                                                    <span>{a.dorsal}</span>
                                                    <PartidoAlineacionesEquipoJugadorNombre>
                                                        <div>
                                                            {a.nacionalidad && <img src={`${URL_IMAGES}banderas/${a.nacionalidad}.png`} />}
                                                            {
                                                                a.id_jugador ? <NavLink to={`/jugadores/${a.id_jugador}`}>
                                                                    {a.nombre_completo}
                                                                </NavLink> 
                                                                : <span>{a.nombre_completo}</span>
                                                            }                                               
                                                        </div>
                                                        <p>{a.posicion}</p>
                                                    </PartidoAlineacionesEquipoJugadorNombre>
                                                </PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                <PartidoAlineacionesEquipoJugadorIncidencias>
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                                        const golesJugador = goles?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );
                                                        
                                                        return golesJugador?.map((incidencia, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index}>
                                                                <div>
                                                                    <PiSoccerBallFill />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                                        const rojasJugador = rojas?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );
                                                        return rojasJugador?.map((incidencia, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='roja'>
                                                                <div>
                                                                    <TbRectangleVerticalFilled />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador                                                        
                                                        const cambioJugador = cambios?.filter((c) => 
                                                            (a.id_jugador && a.id_equipo !== 66 ? c.id_jugador_entrante === a.id_jugador : c.dorsal_entrante === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );

                                                        return cambioJugador?.map((c, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_entra'>
                                                                <p>{c.minuto}'</p>
                                                                <div>
                                                                    <HiArrowLeftCircle />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                                        const cambioJugador = cambios?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador_saliente === a.id_jugador : c.dorsal_saliente === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );                                                    

                                                        return cambioJugador?.map((c, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_sale'>
                                                                <p>{c.minuto}'</p>
                                                                <div>
                                                                    <HiArrowLeftCircle />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                </PartidoAlineacionesEquipoJugadorIncidencias>

                                            </PartidoAlineacionesEquipoJugador>
                                        ))
                                    }
                                </PartidoAlineacionesEquipoJugadoresWrapper>                               
                                <PartidoAlineacionesEquipoJugadoresTitulo>
                                    Suplentes
                                </PartidoAlineacionesEquipoJugadoresTitulo>
                                <PartidoAlineacionesEquipoJugadoresWrapper>
                                    {
                                        alineacion_local
                                        .filter((a) => a.condicion !== "T")
                                        .map((a) => (
                                            <PartidoAlineacionesEquipoJugador>
                                                <PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                    <img src={`${URL_IMAGES}jugadores/player-default.png`} />
                                                    <span>{a.dorsal}</span>
                                                    <PartidoAlineacionesEquipoJugadorNombre>
                                                        <div>
                                                            {a.nacionalidad && <img src={`${URL_IMAGES}banderas/${a.nacionalidad}.png`} />}
                                                            {
                                                                a.id_jugador ? <NavLink to={`/jugadores/${a.id_jugador}`}>
                                                                    {a.nombre_completo}
                                                                </NavLink> 
                                                                : <span>{a.nombre_completo} </span>
                                                            }                                               
                                                        </div>
                                                        <p>{a.posicion}</p>
                                                    </PartidoAlineacionesEquipoJugadorNombre>
                                                    
                                                </PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                <PartidoAlineacionesEquipoJugadorIncidencias>
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador (ajusta la condición según tus datos)

                                                        const golesJugador = goles?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );
                                                        
                                                        return golesJugador.map((incidencia, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index}>
                                                                <div>
                                                                    <PiSoccerBallFill />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                                        const rojasJugador = rojas?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );
                                                        return rojasJugador.map((incidencia, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='roja'>
                                                                <div>
                                                                    <TbRectangleVerticalFilled />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador                                                        
                                                        const cambioJugador = cambios?.filter((c) => 
                                                            (a.id_jugador && a.id_equipo !== 66 ? c.id_jugador_entrante === a.id_jugador : c.dorsal_entrante === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );

                                                        return cambioJugador?.map((c, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_entra'>
                                                                <p>{c.minuto}'</p>
                                                                <div>
                                                                    <HiArrowLeftCircle />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                                        const cambioJugador = cambios?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador_saliente === a.id_jugador : c.dorsal_saliente === a.dorsal) 
                                                            && c.id_equipo === id_equipo_local
                                                        );                                                    

                                                        return cambioJugador?.map((c, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_sale'>
                                                                <p>{c.minuto}'</p>
                                                                <div>
                                                                    <HiArrowLeftCircle />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}

                                                </PartidoAlineacionesEquipoJugadorIncidencias>

                                            </PartidoAlineacionesEquipoJugador>
                                        ))
                                    }
                                </PartidoAlineacionesEquipoJugadoresWrapper>
                                <PartidoAlineacionesEquipoJugadoresTitulo>
                                    DT: {dt_local}
                                </PartidoAlineacionesEquipoJugadoresTitulo>
                            </> : (
                                <>
                                <PartidoAlineacionesEquipoJugadoresTitulo>
                                    Alineación titular
                                </PartidoAlineacionesEquipoJugadoresTitulo>
                                <PartidoAlineacionesEquipoJugadoresWrapper>
                                {
                                    alineacion_visita
                                    .filter((a) => a.condicion === "T")
                                    .map((a) => (
                                        <PartidoAlineacionesEquipoJugador>
                                            <PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                <img src={`${URL_IMAGES}jugadores/player-default.png`} />
                                                <span>{a.dorsal}</span>
                                                <PartidoAlineacionesEquipoJugadorNombre>
                                                    <div>
                                                        {a.nacionalidad && <img src={`${URL_IMAGES}banderas/${a.nacionalidad}.png`} />}
                                                        {
                                                            a.id_jugador ? <NavLink to={`/jugadores/${a.id_jugador}`}>
                                                                {a.nombre_completo}
                                                            </NavLink> 
                                                            : <span>{a.nombre_completo}</span>
                                                        }                                               
                                                    </div>
                                                    <p>{a.posicion}</p>
                                                </PartidoAlineacionesEquipoJugadorNombre>
                                                
                                            </PartidoAlineacionesEquipoJugadorNombreWrapper>
                                            <PartidoAlineacionesEquipoJugadorIncidencias>
                                                {(() => {
                                                    // Filtramos las incidencias del jugador (ajusta la condición según tus datos)

                                                    const golesJugador = goles?.filter((c) => 
                                                        (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                        && c.id_equipo === id_equipo_visita
                                                    );
                                                    
                                                    return golesJugador.map((incidencia, index) => (
                                                        <PartidoAlineacionesEquipoJugadorIncidencia key={index}>
                                                            <div>
                                                                <PiSoccerBallFill />
                                                            </div>
                                                        </PartidoAlineacionesEquipoJugadorIncidencia>
                                                    ));
                                                })()}
                                                {(() => {
                                                    // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                                    const rojasJugador = rojas?.filter((c) => 
                                                        (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                        && c.id_equipo === id_equipo_rival
                                                    );
                                                    return rojasJugador.map((incidencia, index) => (
                                                        <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='roja'>
                                                            <div>
                                                                <TbRectangleVerticalFilled />
                                                            </div>
                                                        </PartidoAlineacionesEquipoJugadorIncidencia>
                                                    ));
                                                })()}
                                                {(() => {
                                                    // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                                    const cambioJugador = cambios?.filter((c) => 
                                                        (a.id_jugador ? c.id_jugador_entrante === a.id_jugador : c.dorsal_entrante === a.dorsal) 
                                                        && c.id_equipo === id_equipo_visita
                                                    );

                                                    return cambioJugador?.map((c, index) => (
                                                        <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_entra'>
                                                            <p>{c.minuto}'</p>
                                                            <div>
                                                                <HiArrowLeftCircle />
                                                            </div>
                                                        </PartidoAlineacionesEquipoJugadorIncidencia>
                                                    ));
                                                })()}
                                                {(() => {
                                                    // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                                    const cambioJugador = cambios?.filter((c) => 
                                                        (a.id_jugador ? c.id_jugador_saliente === a.id_jugador : c.dorsal_saliente === a.dorsal) 
                                                        && c.id_equipo === id_equipo_visita
                                                    );                                                    

                                                    return cambioJugador?.map((c, index) => (
                                                        <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_sale'>
                                                            <p>{c.minuto}'</p>
                                                            <div>
                                                                <HiArrowLeftCircle />
                                                            </div>
                                                        </PartidoAlineacionesEquipoJugadorIncidencia>
                                                    ));
                                                })()}

                                            </PartidoAlineacionesEquipoJugadorIncidencias>

                                        </PartidoAlineacionesEquipoJugador>
                                    ))
                                }
                                </PartidoAlineacionesEquipoJugadoresWrapper>                                
                                <PartidoAlineacionesEquipoJugadoresTitulo>
                                    Suplentes
                                </PartidoAlineacionesEquipoJugadoresTitulo>
                                <PartidoAlineacionesEquipoJugadoresWrapper>
                                    {
                                        alineacion_visita
                                        .filter((a) => a.condicion !== "T")
                                        .map((a) => (
                                            <PartidoAlineacionesEquipoJugador>
                                                <PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                    <img src={`${URL_IMAGES}jugadores/player-default.png`} />
                                                    <span>{a.dorsal}</span>
                                                    <PartidoAlineacionesEquipoJugadorNombre>
                                                        <div>
                                                            {a.nacionalidad && <img src={`${URL_IMAGES}banderas/${a.nacionalidad}.png`} />}
                                                            {
                                                                a.id_jugador ? <NavLink to={`/jugadores/${a.id_jugador}`}>
                                                                    {a.nombre_completo}
                                                                </NavLink> 
                                                                : <span>{a.nombre_completo}</span>
                                                            }                                               
                                                        </div>
                                                        <p>{a.posicion}</p>
                                                    </PartidoAlineacionesEquipoJugadorNombre>
                                                    
                                                </PartidoAlineacionesEquipoJugadorNombreWrapper>
                                                <PartidoAlineacionesEquipoJugadorIncidencias>
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador (ajusta la condición según tus datos)

                                                        const golesJugador = goles?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                            && c.id_equipo === id_equipo_visita
                                                        );
                                                        
                                                        return golesJugador.map((incidencia, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index}>
                                                                <div>
                                                                    <PiSoccerBallFill />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador (ajusta la condición según tus datos)
                                                        const rojasJugador = rojas?.filter((c) => 
                                                            (a.id_jugador ? c.id_jugador === a.id_jugador : c.dorsal === a.dorsal) 
                                                            && c.id_equipo === id_equipo_visita
                                                        );                                                        return rojasJugador?.map((incidencia, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='roja'>
                                                                <div>
                                                                    <TbRectangleVerticalFilled />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                                        const cambioJugador = cambios?.filter((c) => 
                                                            (a.id_jugador && a.id_equipo !== 66 ? c.id_jugador_entrante === a.id_jugador : c.dorsal_entrante === a.dorsal) 
                                                            && c.id_equipo === id_equipo_visita
                                                        );

                                                        return cambioJugador?.map((c, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_entra'>
                                                                <p>{c.minuto}'</p>
                                                                <div>
                                                                    <HiArrowLeftCircle />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                    {(() => {
                                                        // Filtramos las incidencias del jugador basándonos en la existencia de id_jugador
                                                        const cambioJugador = cambios?.filter((c) => 
                                                            (a.id_jugador && a.id_equipo !== 66 ? c.id_jugador_saliente === a.id_jugador : c.dorsal_saliente === a.dorsal) 
                                                            && c.id_equipo === id_equipo_visita
                                                        );                                                    

                                                        return cambioJugador?.map((c, index) => (
                                                            <PartidoAlineacionesEquipoJugadorIncidencia key={index} className='cambio_sale'>
                                                                <p>{c.minuto}'</p>
                                                                <div>
                                                                    <HiArrowLeftCircle />
                                                                </div>
                                                            </PartidoAlineacionesEquipoJugadorIncidencia>
                                                        ));
                                                    })()}
                                                </PartidoAlineacionesEquipoJugadorIncidencias>

                                            </PartidoAlineacionesEquipoJugador>
                                        ))
                                    }
                                </PartidoAlineacionesEquipoJugadoresWrapper>
                                <PartidoAlineacionesEquipoJugadoresTitulo>
                                    DT: {dt_visita}
                                </PartidoAlineacionesEquipoJugadoresTitulo>
                            </>)}
                        </PartidoAlineacionesEquipoJugadores>
                    </PartidoAlineacionesEquipo>
                </PartidoAlineacionesWrapper>
            </PartidoWrapper>
        </PartidoContainer>
    );
};
export default Partido;
