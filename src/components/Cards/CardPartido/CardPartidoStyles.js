import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardPartidoContainer = styled(NavLink)`
    padding: 15px;
    background-color: var(--black-100);
    width: 100%;
    color: var(--black-950);
    border-radius: 20px;
`

export const CardPartidoEquipos = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
`

export const CardPartidoEquipo = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
    p {
        width: 100%;
        &.local {
            text-align: end;
        }
    }
    img {
        width: 20px;
    }
`

export const CardPartidoResultado = styled.div`
    display: flex;
    gap: 8px;
    width: 100px;
    justify-content: center;
    font-weight: 700;
`