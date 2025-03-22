import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { PartidoMenuWrapper } from './PartidoStyles'

const PartidoMenu = ({ id_partido }) => {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab") || "resumen"; // Por defecto en "resumen"

    return (
        <PartidoMenuWrapper>
            <NavLink 
                to={`/partidos/${id_partido}?tab=resumen`} 
                className={({ isActive }) => (tab === "resumen" ? "active" : "")}
            >
                Resumen
            </NavLink>
            <NavLink 
                to={`/partidos/${id_partido}?tab=alineacion`} 
                className={({ isActive }) => (tab === "alineacion" ? "active" : "")}
            >
                Alineación
            </NavLink>
        </PartidoMenuWrapper>
    )
}

export default PartidoMenu
