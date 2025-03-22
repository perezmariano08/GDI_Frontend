import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../../components/Templates/Templates";
import { DataTable } from "primereact/datatable";

export const PartidosContainer = styled(ContainerStyled)``

export const PartidosWrapper = styled(WrapperStyled)`
    flex-direction: column;
    gap: 5px;
    padding-top: 40px;
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