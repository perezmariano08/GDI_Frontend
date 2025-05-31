import styled from "styled-components";

export const CardPartidoContainer = styled.div`
    background-color: var(--white-0);
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    border-radius: 10px;
`

export const CardPartidoDetallesWrapper = styled.div`
    display: flex;
    gap: 25px;
    width: 100%;

    img {
        height: 80px;
        width: 80px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const CardPartidoDetalles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

export const CardPartidoDetallesTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;

    p {
        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
`

export const CardPartidoEquiposWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const CardPartidoEquipoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    &.iacc {
        color: var(--red);
    }

    h2 {
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        @media (max-width: 768px) {
            font-size: 24px;
        }
        @media (max-width: 400px) {
            font-size: 20px;
        }
    }
`

export const CardPartidoEquipoGoles = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    p {
        font-size: 30px;
        font-weight: 600;
        min-width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
            font-size: 24px;
        }
        @media (max-width: 400px) {
            font-size: 20px;
        }
    }

    span {
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }
`

export const CardPartidoDetallesBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p, span {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        font-weight: 400;
        @media (max-width: 768px) {
            font-size: 10px;
        }
    }

    span {
        text-transform: uppercase;
    }

    
`

export const CardPartidoBotones = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        margin-top: 20px;
        text-transform: uppercase;
        border: 2px solid var(--red);
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 14px;
        color: var(--red);
        transition: all .2s ease-in-out;

        &:hover {
            background-color: var(--red);
            color: var(--white-0);
        }
    }
`