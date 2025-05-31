import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../../components/Templates/Templates";

export const JugadorContainer = styled(ContainerStyled)``
export const JugadorWrapper = styled(WrapperStyled)`
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
`

export const JugadorInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 16px;
    background-color: var(--black-0);
    border: 1px solid var(--black-200);
`

export const JugadorInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid var(--black-200);
    padding: 20px;
    width: 100%;

    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }

    h1 {
        font-size: 24px;
        font-weight: 600;
        span {
            font-weight: 700;
            text-transform: uppercase;
        }
    }
`

export const JugadorInfoNombre = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        font-size: 24px;
        font-weight: 600;
        span {
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    h2 {
        font-size: 14px;
        font-weight: 700;
        color: var(--black-400);
    }
`

export const JugadorInfoGeneral = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    padding: 20px;
`

export const JugadorInfoItem = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;

    .nac {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
            width: 15px;
            height: 15px;
            border-radius: 50%;
        }
    }

    p {
        font-size: 14px;
        font-weight: 600;
        color: var(--black-500);
    }  
    
    span {
        font-size: 16px;
        font-weight: 700;
    }
`

export const JugadorEstadisticasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const JugadorEstadisticaCampaña = styled.div`
    background-color: var(--black-0);
    border: 1px solid var(--black-200);
    width: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
`

export const JugadorEstadisticaTitulo = styled.h3`
    font-size: 18px;
    font-weight: 700;
    padding: 20px;
    border-bottom: 1px solid var(--black-200);
    color: var(--black-800);
`

export const JugadorEstadisticasItems = styled.h3`
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    padding: 30px 20px;
`

export const JugadorEstadisticasItem = styled.h3`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 25%;

    p {
        font-size: 14px;
        font-weight: 600;
        color: var(--black-500);
    }

    .tarjeta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        svg {
            font-size: 14px;

            &.red {
                color: var(--red);
            }
            &.yellow {
                color: yellow;
            }
        }
    }

    span {
        font-size: 16px;
        font-weight: 700;
    }
`