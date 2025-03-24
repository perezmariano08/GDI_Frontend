import React, { useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { PartidoAlineacionesEquipo, PartidoAlineacionesEquipoJugador, PartidoAlineacionesEquipoJugadores, PartidoAlineacionesEquipoJugadoresTitulo, PartidoAlineacionesEquipoJugadoresWrapper, PartidoAlineacionesEquipoJugadorIncidencia, PartidoAlineacionesEquipoJugadorIncidencias, PartidoAlineacionesEquipoJugadorNombre, PartidoAlineacionesEquipoJugadorNombreWrapper, PartidoAlineacionesEquipoNombre, PartidoAlineacionesEquipoTitulo, PartidoAlineacionesEquipoTituloSwitch, PartidoAlineacionesEquipoTituloWrapper, PartidoAlineacionesWrapper, PartidoContainer, PartidoDetallesArbitroEstadio, PartidoDetallesEquipo, PartidoDetallesEquipos, PartidoDetallesFecha, PartidoDetallesGoles, PartidoDetallesGolesEquipo, PartidoDetallesGolesIcono, PartidoDetallesInformacionMobile, PartidoDetallesResultado, PartidoDetallesRojasIcono, PartidoDetallesWrapper, PartidoInformacionAdicionalItem, PartidoInformacionAdicionalWrapper, PartidoNavegador, PartidoWrapper, PartidoWrapperLeft, PartidoWrapperRight } from './PartidoStyles';
import { URL_IMAGES, URL_VIDEOS } from '../../utils/constants';
import { PiSoccerBallFill } from "react-icons/pi";
import { formatearFecha } from '../../utils/formatearFecha';
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { usePartido, usePartidoAlineaciones, usePartidoCambios, usePartidosIncidencias } from '../../hooks/api/usePartidos';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PartidoMenu from './PartidoMenu';
import { motion } from "framer-motion";
import { GiWhistle } from "react-icons/gi";
import { MdOutlineStadium } from "react-icons/md";
import { TbSoccerField } from "react-icons/tb";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoIosArrowBack, IoMdCalendar } from "react-icons/io";
import PartidoAlineaciones from './PartidoAlineaciones';


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
        link
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
                                <NavLink>
                                    <Skeleton width={100} height={20}/>
                                    <Skeleton width={40} height={40} borderRadius={'100%'}/>
                                </NavLink>
                            </PartidoDetallesEquipo>
                            <PartidoDetallesResultado>
                                <Skeleton width={60} height={24}/>
                                <Skeleton width={80} height={14}/>
                            </PartidoDetallesResultado>
                            <PartidoDetallesEquipo className='visitante'>
                                <NavLink>
                                    <Skeleton width={100} height={20}/>
                                    <Skeleton width={40} height={40} borderRadius={'100%'}/>
                                </NavLink>
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
                <PartidoWrapperLeft>
                    {/* <PartidoNavegador>
                        <div className="arrow">
                            <IoIosArrowBack />
                        </div>
                        Volver
                    </PartidoNavegador> */}
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
                                <NavLink to={`/equipos/${id_equipo_local}`}>
                                    <span>{nombre_local}</span>
                                    <img src={`${URL_IMAGES}escudos/${escudo_local}`} />
                                </NavLink>
                            </PartidoDetallesEquipo>
                            <PartidoDetallesResultado>
                                <span>{`${goles_local} - ${goles_visita}`}</span>
                                {estado === "F" && <p>Finalizado</p>}
                                {estado === "S" && <p>Suspendido</p>}
                            </PartidoDetallesResultado>
                            <PartidoDetallesEquipo className="visitante">
                                <NavLink to={`/equipos/${id_equipo_visita}`}>
                                    <span>{nombre_visita}</span>
                                    <img src={`${URL_IMAGES}escudos/${escudo_visita}`} />
                                </NavLink>
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
                                            const nombreJugador = `${g.nombre[0]}. ${g.apellido}`; // Concatenar la primera letra del nombre con el apellido
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
                                            const nombreJugador = `${g.nombre[0]}. ${g.apellido}`; // Concatenar la primera letra del nombre con el apellido
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
                                            <p key={g.dorsal}>{g.apellido ? `${g.nombre[0]}. ${g.apellido} ${g.minuto}'` : `${g.jugador} ${g.minuto}'`}</p>
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
                                            <p key={g.dorsal}>{g.apellido ? `${g.minuto}' ${g.nombre[0]}. ${g.apellido}` : `${g.minuto}' ${g.jugador} `}</p>
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
                    {/* Switch equipos */}
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
                                        <p>{nombre_local}</p>
                                    </PartidoAlineacionesEquipoNombre>
                                    <PartidoAlineacionesEquipoNombre 
                                    className={equipoSeleccionado === "visitante" ? "active" : ""}
                                    onClick={() => setEquipoSeleccionado("visitante")}
                                    >
                                        <img src={`${URL_IMAGES}escudos/${escudo_visita}`} />
                                        <p>{nombre_visita}</p>
                                    </PartidoAlineacionesEquipoNombre>
                                </PartidoAlineacionesEquipoTitulo>
                            </PartidoAlineacionesEquipoTituloWrapper>
                        </PartidoAlineacionesEquipo>
                    </PartidoAlineacionesWrapper>
                    {/* ALineaciones del partido */}
                    <PartidoAlineaciones 
                        id_partido={id_partido} 
                        id_equipo={equipoSeleccionado === "local" ? id_equipo_local : id_equipo_visita}
                        dt={equipoSeleccionado === "local" ? dt_local : dt_visita}
                    />
                </PartidoWrapperLeft>
                <PartidoWrapperRight>
                    {
                        link && <iframe 
                            src={link}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    }
                    {/* <video controls width="100%">
                    <source src={`${URL_VIDEOS}video.mp4`} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                    </video> */}
                </PartidoWrapperRight>
            </PartidoWrapper>
        </PartidoContainer>
    );
};
export default Partido;
