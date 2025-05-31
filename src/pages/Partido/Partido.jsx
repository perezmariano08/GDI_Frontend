import React, { useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { PartidoAlineacionesEquipo, PartidoAlineacionesEquipoNombre, PartidoAlineacionesEquipoTitulo, PartidoAlineacionesEquipoTituloSwitch, PartidoAlineacionesEquipoTituloWrapper, PartidoAlineacionesWrapper, PartidoContainer, 
    PartidoDetallesEquipo, PartidoDetallesEquipos, PartidoDetallesGoles, PartidoDetallesGolesEquipo, PartidoDetallesGolesIcono, PartidoDetallesResultado, PartidoDetallesRojasIcono, PartidoDetallesWrapper, PartidoGaleria, PartidoHistorialEquipo, PartidoHistorialEquipos, PartidoHistorialLink, PartidoHistorialTitulo, PartidoHistorialWrapper, PartidoImagenesTitulo, PartidoImagenesWrapper, PartidoInfo, PartidoMetadata, PartidoMetadataMobile, PartidoNota, PartidoVideo, PartidoVideoTitulo, PartidoVideoWrapper, PartidoWrapper, PartidoWrapperLeft, PartidoWrapperRight } from './PartidoStyles';
import { URL_IMAGES, URL_VIDEOS } from '../../utils/constants';
import { PiSoccerBallFill } from "react-icons/pi";
import { formatearDDMM, formatearFecha, formatearFechaImagenesPartido } from '../../utils/formatearFecha';
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { usePartido, usePartidoImagenes, usePartidosIncidencias, usePartidosRival } from '../../api/partidos/usePartidos';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PartidoMenu from './PartidoMenu';
import { GiWhistle } from "react-icons/gi";
import { MdOutlineStadium } from "react-icons/md";
import { TbSoccerField } from "react-icons/tb";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoIosArrowBack, IoMdCalendar } from "react-icons/io";
import PartidoAlineaciones from './PartidoAlineaciones';
import { formatearSlugEquipo, formatearSlugJugador, formatearSlugPartido } from '../../utils/utils';
import { Galleria } from 'primereact/galleria';
import PartidoCampaña from './PartidoCampaña';
import { BiFootball } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa6';
import { formatearHora } from '../../utils/formatearHora';


const Partido = () => {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab") || "resumen";
    const id_partido = parseInt(useParams().id_partido, 10);
    const { data: partido, error, isLoading: partidoLoading} = usePartido(id_partido);
    // Desestructuración de partido
    const { estado, fase, interzonal, condicion, sub_torneo, nota, nombre_torneo, equipo_local, equipo_visita, jornada, torneo, temporada, arbitro, estadio, dia, hora, link, id_equipo_local, escudo_local, goles_local, nombre_local, dt_local, id_equipo_visita, escudo_visita, goles_visita, nombre_visita, dt_visita, penales_local, penales_visita       
    } = partido || []

    const { data: incidencias, isLoading: incidenciasLoading} = usePartidosIncidencias(id_partido);
    const goles = incidencias?.filter((i) => i.tipo === "G") || [];
    const rojas = incidencias?.filter((i) => i.tipo === "R") || [];
    const [equipoSeleccionado, setEquipoSeleccionado] = useState("local"); // Estado inicial

    
    const { data: imagenes, isLoading: imagenesLoading} = usePartidoImagenes(id_partido);
    const id_equipo_rival = condicion === "V" ? id_equipo_local : id_equipo_visita
    const { data: historial, isLoading: historialLoading } = usePartidosRival(id_equipo_rival);

    console.log(historial);
    
    const caption = (item) => {
        if (item.descripcion) {
            return <p>{item.descripcion}</p>;
        }
        return <p>{formatearFecha(item.dia)}</p>; // No muestra el caption si no hay descripción
    };

    const itemTemplate = (item) => {
        return <img src={`${URL_IMAGES}partidos/${item.src}`} alt={item.alt} />;
    }

    
    
    // Skeleton
    if (partidoLoading || incidenciasLoading) {
        return (
            <PartidoContainer>
                <PartidoWrapper>
                    <PartidoWrapperLeft>
                        <PartidoDetallesWrapper>
                            <PartidoInfo>
                                <p><Skeleton width={150} height={10}/></p>
                                <p><Skeleton width={150} height={10}/></p>
                            </PartidoInfo>
                            <PartidoMetadata>
                                <div className="item">
                                    <p><Skeleton width={80} height={10}/></p>
                                </div>
                                <div className="item">
                                    <p><Skeleton width={80} height={10}/></p>
                                </div>
                                <div className="item">
                                    <p><Skeleton width={80} height={10}/></p>
                                </div>
                            </PartidoMetadata>
                            <PartidoDetallesEquipos>
                                <PartidoDetallesEquipo>
                                    <NavLink>
                                        <span><Skeleton width={100} height={20}/></span>
                                        <Skeleton width={40} height={40} borderRadius={'100%'}/>
                                    </NavLink>
                                </PartidoDetallesEquipo>
                                <PartidoDetallesResultado>
                                    <p><Skeleton width={60} height={24}/></p>
                                    <span><Skeleton width={55} height={12}/></span>
                                </PartidoDetallesResultado>
                                <PartidoDetallesEquipo className='visitante'>
                                    <NavLink>
                                        <span><Skeleton width={100} height={20}/></span>
                                        <Skeleton width={40} height={40} borderRadius={'100%'}/>
                                    </NavLink>
                                </PartidoDetallesEquipo>
                            </PartidoDetallesEquipos>
                        </PartidoDetallesWrapper>
                    </PartidoWrapperLeft>
                    <PartidoWrapperRight>
                        
                    </PartidoWrapperRight>
                </PartidoWrapper>
            </PartidoContainer>
        );
    }    

    console.log(equipoSeleccionado);
    

    return (
        <PartidoContainer>
            <PartidoWrapper>
                <PartidoWrapperLeft>
                    <PartidoDetallesWrapper>
                        <PartidoInfo>
                            <p>
                                {nombre_torneo ? `${nombre_torneo}` : `${torneo} ${temporada}`} 
                                {sub_torneo && ` | ${sub_torneo}`} 
                            </p>
                            <p>
                                {interzonal === "S" ? `${jornada} (Interzonal)` : `${fase ? `${fase}${jornada && ` | ${jornada}`}` : `${jornada}`}`}  </p>
                        </PartidoInfo>
                        <PartidoMetadata>
                            <div className="item">
                                <IoMdCalendar />
                                <p>{dia ? formatearFecha(dia) : 'A confirmar'}</p>
                            </div>
                            <div className="item">
                                <GiWhistle />
                                <p>{arbitro ? arbitro : 'Sin definir'}</p>
                            </div>
                            <div className="item">
                                <TbSoccerField />
                                <p>{estadio ? estadio : 'Sin definir'}</p>
                            </div>
                        </PartidoMetadata>
                        <PartidoDetallesEquipos>
                            <PartidoDetallesEquipo>
                                <NavLink to={`/equipos/${formatearSlugEquipo(equipo_local)}/${id_equipo_local}`}>
                                    <h3>{equipo_local}</h3>
                                    <img src={`${URL_IMAGES}escudos/${escudo_local}`} />
                                </NavLink>
                            </PartidoDetallesEquipo>
                            <PartidoDetallesResultado>
                                {
                                    estado === "F" ? <>
                                    <strong>{`${goles_local} - ${goles_visita}`}</strong>
                                        {
                                            penales_local 
                                            ? <strong className='penales'>{`Pen: ${penales_local}-${penales_visita}`}</strong>
                                            : <>
                                                {estado === "F" && <p>Finalizado</p>}
                                                
                                            </>
                                        }
                                    </>
                                    : <>
                                        <strong>{hora ? `${formatearHora(hora)}` : '-'}</strong>
                                        <p>{dia ? formatearDDMM(dia) : 'A confirmar'}</p>
                                        {estado === "S" && <p>Suspendido</p>}
                                    </>
                                }
                                
                            </PartidoDetallesResultado>
                            <PartidoDetallesEquipo className="visitante">
                                <NavLink to={`/equipos/${formatearSlugEquipo(equipo_visita)}/${id_equipo_visita}`}>
                                    <h3>{equipo_visita}</h3>
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
                                    <BiFootball />
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
                        {/* <PartidoMenu slug={formatearSlugPartido(nombre_local, nombre_visita)} id_partido={id_partido}/> */}
                    </PartidoDetallesWrapper>
                    <PartidoMetadataMobile>
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
                    </PartidoMetadataMobile>
                    {estado === "S" && <PartidoNota><p>{nota}</p></PartidoNota>}

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
                        incidencias={incidencias}
                        id_equipo={equipoSeleccionado === "local" ? id_equipo_local : id_equipo_visita}
                        dt={equipoSeleccionado === "local" ? dt_local : dt_visita}
                    />
                    {
                        imagenes?.length > 0 && <PartidoImagenesWrapper>
                            <PartidoImagenesTitulo>
                                <h3>Fotos del partido</h3>
                            </PartidoImagenesTitulo>
                            <PartidoGaleria 
                                value={imagenes} 
                                numVisible={5} 
                                circular 
                                showItemNavigators 
                                showItemNavigatorsOnHover 
                                showIndicators
                                showThumbnails={false} 
                                item={itemTemplate} 
                                caption={caption}
                            />
                        </PartidoImagenesWrapper>
                    }
                </PartidoWrapperLeft>
                <PartidoWrapperRight>
                    {
                        historial?.length > 0 && <PartidoHistorialWrapper>
                            <PartidoHistorialTitulo>
                                <h3>Historial entre ambos ({`${historial?.length} partidos`})</h3>
                            </PartidoHistorialTitulo>
                            <PartidoHistorialEquipos>
                                <PartidoHistorialEquipo>
                                    <img src={`${URL_IMAGES}escudos/instituto.png`} />
                                    <div className='green'>{historial?.filter((p) => p.resultado === "G").length}</div>
                                    <span>Victorias</span>
                                </PartidoHistorialEquipo>
                                <PartidoHistorialEquipo>
                                    <div>{historial?.filter((p) => p.resultado === "E").length}</div>
                                    <span>Empates</span>
                                </PartidoHistorialEquipo>
                                <PartidoHistorialEquipo>
                                    <img src={`${URL_IMAGES}escudos/${id_equipo_local === 66 ? escudo_visita : escudo_local}`} />
                                    <div className='red'>{historial?.filter((p) => p.resultado === "P").length}</div>
                                    <span>Victorias</span>
                                </PartidoHistorialEquipo>
                            </PartidoHistorialEquipos>
                            <PartidoHistorialLink>
                                <NavLink>
                                    Ver historial completo
                                    <FaAngleRight />
                                </NavLink>
                            </PartidoHistorialLink>
                        </PartidoHistorialWrapper>
                    }
                    
                    {
                        link && <PartidoVideoWrapper>
                            <PartidoVideoTitulo>
                                <h3>Video resumen</h3>
                            </PartidoVideoTitulo>
                            <PartidoVideo>
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
                            </PartidoVideo>
                            
                        </PartidoVideoWrapper>
                    }
                    <PartidoCampaña id_partido={id_partido} torneo={torneo} temporada={temporada}/>
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
