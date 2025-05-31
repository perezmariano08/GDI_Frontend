import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../../components/Templates/Templates";
import { DataTable } from "primereact/datatable";

export const PartidosContainer = styled(ContainerStyled)`
    flex-direction: column;
    align-items: center;
`

export const PartidosDropdownContainer = styled(ContainerStyled)`
    width: 100%;
    background-color: var(--white-0);
`

export const PartidosDropdownWrapper = styled(WrapperStyled)`
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 900px;

    .p-dropdown {
        width: fit-content;
    }
    @media (max-width: 768px) {
        padding: 40PX;
    }
`

export const PartidosMesesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--white-100);
    flex-wrap: wrap;
  a {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    position: relative;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in-out;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: var(--red);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
    }

    &:hover,
    &.active {
        color: var(--red);

        &::after {
            transform: scaleX(1);
        }
        }
    }
`;

export const PartidosWrapper = styled(WrapperStyled)`
    flex-direction: column;
    gap: 5px;
    padding-top: 40px;
    padding-bottom: 40px;
    align-items: center;
    width: 100%;
    max-width: 900px;
    gap: 20px;
`

export const PartidosDataTable = styled(DataTable)`
    width: 100%;
    font-size: 14px;
    background-color: var(--black-100);
    border: 1px solid var(--black-200);
    border-radius: 10px;
    overflow: hidden;

    thead tr:first-child th {
        span {
            font-weight: 700;
        }
    }

    th {
        border: none;
        background-color: var(--black-100);
        color: var(--black-600);
    }

    .p-column-filter-menu-button,
    .p-column-filter-clear-button {
        display: none;
    }

    .p-inputtext {
        font-size: 14px;
    }

    tr td,
    tr th {
        padding: 10px 15px;
    }

    tr:hover {
        background-color: var(--black-100);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const EquipoBodyTemplate = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    img {
        width: 20px;
    }
    @media (max-width: 768px) {
        p {
            font-size: 14px;
        }
        img {
            width: 15px;
        }
    }
`

export const ResultadoBodyTemplate = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div {
        font-weight: 600;
        width: fit-content;
        min-width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px 10px;
        border-radius: 10px;
        color: var(--black-50);
        &.perdido {
            background-color: var(--red);
        }
        &.ganado {
            background-color: var(--green);
        }
        &.empate {
            background-color: orange;
        }
    }
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`