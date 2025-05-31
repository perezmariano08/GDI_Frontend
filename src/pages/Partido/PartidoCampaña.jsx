import React from 'react'
import { PartidoCampañaCard, PartidoCampañaContainer, PartidoCampañaEquipo, PartidoCampañaEquipoNombre, PartidoCampañaEquipos, PartidoCampañaLink, PartidoCampañaTitulo } from './PartidoStyles'
import { usePartidoCampañaPartidos } from '../../api/partidos/usePartidos';
import { URL_IMAGES } from '../../utils/constants';
import { formatearSlugPartido } from '../../utils/utils';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const PartidoCampaña = ({id_partido, torneo, temporada}) => {
    const { data: partidos, error: partidosError, isLoading: partidosLoading} = usePartidoCampañaPartidos(id_partido);

    // Encontrar el índice del partido activo
    const indexActivo = partidos?.findIndex(p => p.id_partido === id_partido);

    let start = Math.max(0, indexActivo - 2); // Máximo 2 partidos antes
    let end = start + 5; // Total de 5 partidos

    // Ajustar si no hay suficientes partidos después
    if (end > partidos?.length) {
        end = partidos?.length;
        start = Math.max(0, end - 5); // Asegurar que sigan siendo 5
    }

    const partidosFiltrados = partidos?.slice(start, end);

    return (
        <PartidoCampañaContainer>
            <PartidoCampañaTitulo>
                <h3>{torneo} {temporada}</h3>
            </PartidoCampañaTitulo>
            {
                partidosFiltrados?.map((p) => (
                    <PartidoCampañaCard 
                        key={p.id_partido} 
                        className={`${id_partido === p.id_partido && 'activo'}`} 
                        to={`/partidos/${formatearSlugPartido(p.equipo_local, p.equipo_visita)}/${p.id_partido}`}
                    >
                        <PartidoCampañaEquipos>
                            <div className="fecha">
                                {p.fase && `${p.fase} ${p.jornada ? `| ${p.jornada}` : p.jornada}`}
                                {p.interzonal === "S" && ` (Interzonal)`}
                            </div>
                            <PartidoCampañaEquipo>
                                <img src={`${URL_IMAGES}escudos/${p.escudo_local}`} alt="" />
                                <p>{p.equipo_local}</p>
                                <span>{p.goles_local}</span>
                            </PartidoCampañaEquipo>
                            <PartidoCampañaEquipo>
                                <img src={`${URL_IMAGES}escudos/${p.escudo_visita}`} alt="" />
                                <p>{p.equipo_visita}</p>
                                <span>{p.goles_visita}</span>
                            </PartidoCampañaEquipo>
                        </PartidoCampañaEquipos>
                    </PartidoCampañaCard>
                ))
            }
            <PartidoCampañaLink>
                <NavLink>
                    Ver campaña completa
                    <FaAngleRight />
                </NavLink>
            </PartidoCampañaLink>
        </PartidoCampañaContainer>
    )
}

export default PartidoCampaña;
