import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../../components/Templates/Templates";
import { motion } from "framer-motion";

export const PartidoContainer = styled(ContainerStyled)``

export const PartidoWrapper = styled(WrapperStyled)`
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const PartidoMenuWrapper = styled.div`
    display: flex;
    gap: 20px;
    padding-left: 20px;
    padding-top: 20px;
    a {
        color: var(--black-900);
        font-weight: 500;
        padding: 20px 10px;
        border-radius: 2px;
        overflow: hidden;
        &.active {
            border-bottom: 2px solid red;
        }
    }
`

export const PartidoDetallesWrapper = styled.div`
    background-color: var(--black-0);
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: 20px;

    &.suspendido {
        background-color: var(--black-950);
        color: var(--black-50);
    }

    @media (max-width: 968px) {
        width: 100%;
    }
`

export const PartidoDetallesFecha = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px 20px;
    border-bottom: 1px solid var(--black-100);
    p {
        font-size: 12px;
        font-weight: 500;
        color: var(--black-600);
    }
`

export const PartidoDetallesArbitroEstadio = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 14px 20px;
    border-bottom: 1px solid var(--black-100);

    .item {
        display: flex;
        align-items: center;
        gap: 5px;
        p, svg {
            font-size: 12px;
            color: var(--black-600);
        }
        p {
            font-weight: 500;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const PartidoDetallesInformacionMobile = styled.div`
    flex-direction: column;
    background-color: var(--black-50);
    width: 100%;
    border-radius: 20px;
    gap: 20px;
    flex-wrap: wrap;
    padding: 14px 20px;
    border-bottom: 1px solid var(--black-100);
    display: none;
    .item {
        display: flex;
        align-items: center;
        gap: 10px;
        p, svg {
            font-size: 12px;
            color: var(--black-600);
        }
        p {
            font-weight: 500;
        }
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const PartidoDetallesEquipos = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    padding: 20px;

`

export const PartidoDetallesEquipo = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    text-align: end;

    img {
        width: 40px;
        @media (max-width: 768px) {
            width: 30px;
        }
    }

    span {
        font-size: 20px;
        font-weight: 700;
        color: var(--black-800);
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }

    &.visitante {
        flex-direction: row-reverse;
        justify-content: flex-end;
        text-align: start;
    }
`

export const PartidoDetallesResultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 80px;
    span {
        font-size: 24px;
        font-weight: 700;
        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    p {
        font-size: 14px;
        font-weight: 500;
        color: var(--black-600);
        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

    @media (max-width: 768px) {
        min-width: 60px;
    }
`

export const PartidoDetallesGoles = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`

export const PartidoDetallesRojas = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
`

export const PartidoDetallesGolesEquipo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    text-align: end;
    gap: 2px;

    p {
        font-size: 12px;
        color: var(--black-600);
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 10px;
        }
    }

    &.visitante {
        align-items: flex-start;
        text-align: start;
    }
`

export const PartidoDetallesGolesIcono = styled.div`
    display: flex;
    min-width: 80px;
    justify-content: center;

    svg {
        font-size: 12px;
        color: var(--black-600);
    }

    @media (max-width: 768px) {
        min-width: 20px;
    }
`

export const PartidoDetallesRojasIcono = styled(PartidoDetallesGolesIcono)`
    svg {
        color: var(--red);
    }
`

export const PartidoAlineacionesWrapper = styled.div`
    background-color: var(--black-0);
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

export const PartidoAlineacionesEquipo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const PartidoAlineacionesEquipoTituloWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 15px;
`

export const PartidoAlineacionesEquipoTitulo = styled.div`
    position: relative;
    display: flex;
    padding: 10px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
`;

export const PartidoAlineacionesEquipoTituloSwitch = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: var(--black-100);
    border-radius: 20px;
`;

export const PartidoAlineacionesEquipoNombre = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;
    z-index: 2;
    border-radius: 20px;
    align-items: center;
    width: 100%;
    gap: 10px;
    img {
        width: 20px;
    }

    &:hover {
        color: var(--black-600);
    }

    &.active {
        color: var(--black-900);
        &:hover {
            color: var(--black-700);
        }
    }
`;

export const PartidoAlineacionesEquipoJugadores = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

export const PartidoAlineacionesEquipoJugadoresWrapper = styled.div`
    display: flex;
    flex-direction: column;
    div {
        &:last-child {
            border-bottom: none;
        }
    }
`

export const PartidoAlineacionesEquipoJugadoresTitulo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    font-weight: 600;
    padding-top: 30px;
`

export const PartidoAlineacionesEquipoJugador = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid var(--black-200);
    img {
        height: 20px;
    }
`

export const PartidoAlineacionesEquipoJugadorNombre = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    div {
        display: flex;
        gap: 7px;
        align-items: center;
        a {
            color: var(--red);
            font-weight: 500;
            font-size: 14px;
        }
        span {
            font-weight: 500;
            font-size: 14px;
            width: auto;
        }

        img {
            height: 10px;
            object-fit: cover;
            width: 10px;
            border-radius: 50%;
        }
    }
    

    p {
        color: var(--black-600);
        font-size: 10px;
    }
`

export const PartidoAlineacionesEquipoJugadorNombreWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    img {
        height: 20px;
        width: 20px;
        object-fit: cover;
        object-position: top;
        border-radius: 50%;
    }

    span {
        width: 20px;
        text-align: end;
        font-weight: 600;
    }
`

export const PartidoAlineacionesEquipoJugadorIncidencias = styled.div`
    display: flex;
    gap: 2px;
`

export const PartidoAlineacionesEquipoJugadorIncidencia = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    height: 12px;

    p {
        font-size: 12px;
        font-weight: 600;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        border: 1px solid var(--black-300);
        svg {
            font-size: 12px;
        }
    }
    

    &.amarilla {
        color: var(--yellow);
    }

    &.roja {
        color: var(--red);
    }

    &.cambio_sale {
        color: var(--red);
    }

    &.cambio_entra {
        color: var(--green);
    }
`

export const PartidoInformacionAdicionalWrapper = styled.div`
    background-color: var(--black-50);
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    padding: 20px;
    gap: 20px;

    span {
        font-weight: 600;
    }  
`

export const PartidoInformacionAdicionalItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titulo {
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
            font-size: 14px;
        }
    }
`