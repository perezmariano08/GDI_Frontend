import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../../components/Templates/Templates";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Galleria } from "primereact/galleria";

export const PartidoContainer = styled(ContainerStyled)``

export const PartidoWrapper = styled(WrapperStyled)`
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: start;
    @media (max-width: 968px) {
        width: 100%;
        flex-direction: column;
    }
`

export const PartidoWrapperLeft = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 67%;
    @media (max-width: 968px) {
        width: 100%;
    }
`

export const PartidoNavegador = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--black-800);

    .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--black-200);

        svg {
            color: var(--black-900);
        }
    }

    &:hover {
        text-decoration: underline;
        .arrow {
            background-color: var(--black-800);

            svg {
                color: var(--black-100);
            }
        }

    }
`

export const PartidoWrapperRight = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 33%;
    border-radius: 16px;

    @media (max-width: 968px) {
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

export const PartidoDetallesWrapper = styled.article`
    background-color: var(--white-0);
    border: 1px solid var(--white-100);
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: var(--radius);

    &.suspendido {
        background-color: var(--black-950);
        color: var(--black-50);
    }

    @media (max-width: 968px) {
        width: 100%;
    }
`

export const PartidoInfo = styled.header`
    display: flex;
    justify-content: space-between;
    padding: var(--padding);
    border-bottom: var(--border);

    p {
        font-size: 12px;
        color: var(--black-500);
    }
`

export const PartidoMetadata = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: var(--padding);
    border-bottom: var(--border);

    .item {
        display: flex;
        align-items: center;
        gap: 5px;

        p, svg {
            font-size: 12px;
            color: var(--black-500);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const PartidoMetadataMobile = styled.div`
    flex-direction: column;
    background-color: var(--white-0);
    border: 1px solid var(--white-100);
    width: 100%;
    border-radius: 16px;
    gap: 20px;
    flex-wrap: wrap;
    padding: 14px 20px;
    border-bottom: var(--border);
    display: none;

    .item {
        display: flex;
        align-items: center;
        gap: 10px;

        p, svg {
            font-size: 12px;
            color: var(--black-500);
        }
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const PartidoNota = styled.div`
    display: flex;
    background-color: var(--black-0);
    border: 1px solid var(--black-200);
    border-left: 6px solid var(--red);
    width: 100%;
    border-radius: 16px;
    gap: 20px;
    flex-wrap: wrap;
    padding: 14px 20px;
    border-bottom: var(--border);
`

export const PartidoDetallesEquipos = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    align-items: center;
    
    @media (max-width: 768px) {
        padding: 25px 10px;
        justify-content: space-between;
    }
`

export const PartidoDetallesEquipo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    text-align: end;

    a {
        display: flex;
        align-items: center;
        gap: 15px;
        
        img {
            width: 35px;
            @media (max-width: 768px) {
                width: 40px;
            }
        }

        h3 {
            font-size: 24px;
            font-weight: 600;
            @media (max-width: 768px) {
                font-size: 14px;
                text-align: center;
            }
        }

        &:hover {
            text-decoration: underline;
            img {
                opacity: 0.6;
            }
        }

        @media (max-width: 768px) {
            gap: 10px;
        }
    }

    &.visitante {
        justify-content: flex-start;
        text-align: start;
        a {
            flex-direction: row-reverse;
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        a {
            flex-direction: column-reverse;
        }
        
        &.visitante {
            justify-content: center;
            align-items: center;
            a {
                flex-direction: column-reverse;
            }
        }  
    }

    @media (max-width: 768px) {
        gap: 12px;
    }
`

export const PartidoDetallesResultado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    min-width: 80px;
    strong {
        font-size: 26px;
        font-weight: 700;
        &.penales {
            font-weight: 600;
            font-size: 14px;
            color: var(--black-500);
        }
        @media (max-width: 768px) {
            font-size: 24px;
        }
    }

    p {
        font-size: 12px;
        color: var(--black-500);
        @media (max-width: 768px) {
            font-size: 10px;
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
        color: var(--black-500);
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
        color: var(--black-500);
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
    background-color: var(--white-0);
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
    border: 1px solid var(--white-100);
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
    background-color: var(--white-50);
    border-radius: 16px;
    border: 1px solid var(--white-100)
`;

export const PartidoAlineacionesEquipoNombre = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: color 0.3s ease;
    z-index: 2;
    border-radius: 16px;
    align-items: center;
    width: 100%;
    gap: 10px;

    p {
        font-size: 16px;
    }

    img {
        width: 20px;
    }

    &:hover {
        color: var(--black-600);
    }

    &.active {
        p {
            color: var(--black-800);
        }
        
        &:hover {
            p {
                color: var(--black-800);
            }
            
        }
    }
    
    @media (max-width: 568px) {
        p {
            display: none;
        }
        img {
            width: 30px;
        }
    }
`;

export const PartidoInformacionAdicionalWrapper = styled.div`
    background-color: var(--white-0);
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


// PartidoAlineacionesContainer.jsx

export const PartidoAlineacionesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PartidoAlineacionWrapper = styled.div`
    background-color: var(--white-0);
    border: 1px solid var(--white-100);
    border-radius: var(--radius);

`

export const PartidoAlineacionTitulo = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;

    span {
        font-size: 16px;
        font-weight: 600;
        color: var(--black-800);
    }
`

export const PartidoAlineacionLista = styled.ul`
    display: flex;
    flex-direction: column;

    div {
        &:last-child {
            border-bottom: none;
        }
    }
`

export const PartidoAlineacionFila = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 14px 20px;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid var(--white-100);
    @media (max-width: 400px) {
        padding: 14px;
    }
`

export const PartidoAlineacionJugadorLink = styled(NavLink)`
    display: flex;
    gap: 15px;
    font-size: 14px;
    align-items: center;
    color: var(--black-600);

    h4 {
        color: var(--red);
    }
    
    img {
        width: 30px;
        border-radius: 50%;
        height: 30px;
        object-fit: cover;
        object-position: top;
        @media (max-width: 568px) {
            display: none;
        }
    }

    span {
        font-weight: 700;
        width: 20px;
        text-align: center;
    }

    &:hover {
        opacity: .6;
    }

    @media (max-width: 40px) {
        gap: 10px;
    }
`

export const PartidoAlineacionJugador = styled.div`
    display: flex;
    gap: 15px;
    font-size: 14px;
    align-items: center;
    color: var(--black-600);

    img {
        width: 30px;
        @media (max-width: 568px) {
            display: none;
        }
    }

    span {
        font-weight: 700;
        width: 20px;
        text-align: center;
    }
`

export const PartidoAlineacionJugadorDetalle = styled.div`
    display: flex;
    gap: 3px;
    font-size: 14px;
    flex-direction: column;
    
    h5 {
        font-size: 12px;
        font-weight: 500;
        color: var(--black-500);
    }
`

export const PartidoAlineacionJugadorNombre = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    img {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        @media (max-width: 568px) {
            display: flex;
        }
    }

    strong {
        font-weight: 700;
        text-transform: uppercase;
    }
`

export const PartidoAlineacionIncidenciasWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const PartidoAlineacionIncidencia = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;

    svg {
        font-size: 14px;
    }

    &.red {
        color: var(--red);
    }

    &.yellow {
        color: var(--red);
    }

    &.green {
        color: var(--green);
    }
`

export const PartidoGaleria = styled(Galleria)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: var(--white-0) !important;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--white-100);

    img {
        width: 100%;
        height: auto;
        max-width: none;
    }

    .p-galleria-indicators {
        display: flex;
        gap: 10px;

        button {
            height: 12px;
            width: 12px;
            background-color: var(--white-100);
            &:hover {
                background-color: var(--black-300);
            }
        }

        .p-highlight button {
            background: var(--red);
            color: #ffffff;
        }
    }

    p {
        font-size: 14px;
        font-weight: 500;
        @media (max-width: 568px) {
            font-size: 12px;
        }

    }
`

/* PartidoCampaña.jsx */

export const PartidoCampañaContainer = styled.div`
    width: 100%;
    background-color: var(--white-0);
    border: 1px solid var(--white-100);
    border-radius: 16px;
    overflow: hidden;
`

export const PartidoCampañaTitulo = styled.header`
    display: flex;
    padding: 20px;

    h3 {
        font-weight: 600;
        font-size: 16px;
        color: var(--black-800);
    }
`


export const PartidoCampañaLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;

    a {
        gap: 5px;
        display: flex;
        align-items: center;
        font-weight: 600;
        color: var(--black-500);
        font-size: 14px;

        &:hover {
            opacity: .8;
            text-decoration: underline;
        }
    }
`

export const PartidoCampañaCard = styled(NavLink)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--white-100);
    
    &.activo {
        background-color: var(--white-50);

        &:hover {
            opacity: 1;
        }
        p {
            color: var(--black-800);
        }

        span {
            background-color: var(--white-0);
        }
    }

    &:hover {
        opacity: 0.7;
    }
`

export const PartidoCampañaEquipos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    .fecha {
        font-weight: 500;
        font-size: 12px;
        color: var(--black-500);
        margin-bottom: 2px;
    }
`

export const PartidoCampañaEquipo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;

    p {
        width: 100%;
    }


    span {
        display: flex;
        justify-content: center;
        background-color: var(--white-100);
        width: 28px;
        font-size: 14px;
        color: var(--black-800);
        font-weight: 700;
    }

    img { 
        height: 15px;
    }

    
`

export const PartidoCampañaEquipoNombre = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;


    p {
        font-weight: 500;
        font-size: 14px;
    }

    img { 
        height: 15px;
    }
`

export const PartidoVideoWrapper = styled.section`
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    background-color: var(--black-0);
    border: var(--border);
    border-radius: var(--radius);
`

export const PartidoVideoTitulo = styled.header`
    h3 {
        font-weight: 600;
        font-size: 16px;
        color: var(--black-800);
    }

    iframe, video {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 16px;
    }
`

export const PartidoVideo = styled.header`

    iframe, video {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 16px;
    }
`

export const PartidoImagenesWrapper = styled.section`
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    background-color: var(--white-0);
    border: var(--border);
    border-radius: var(--radius);
`

export const PartidoImagenesTitulo = styled.header`
    h3 {
        font-weight: 600;
        font-size: 16px;
        color: var(--black-800);
    }
`

export const PartidoHistorialWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: var(--white-0);
    border: var(--border);
    border-radius: var(--radius);
`

export const PartidoHistorialTitulo = styled.header`
    padding: 20px;
    h3 {
        font-weight: 600;
        font-size: 16px;
        color: var(--black-800);
    }

    iframe, video {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 16px;
    }
`

export const PartidoHistorialEquipos = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 20px;
    align-items: end;
    border-bottom: var(--border);
`

export const PartidoHistorialEquipo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    img {
        width: 40px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        width: 70px;
        color: var(--black-800);
        padding: 5px 0;
        border-radius: var(--radius);
        border: var(--border);
        background-color: var(--white-100);


        &.red {
            background-color: var(--red);
            color: var(--white-0);
        }

        &.green {
            color: var(--white-0);
            background-color: var(--green);
        }
    }

    span {
        font-size: 14px;
        font-weight: 700;
        color: var(--black-800);
    }
`

export const PartidoHistorialLink = styled(PartidoCampañaLink)``