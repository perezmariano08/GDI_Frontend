import { DataTable } from "primereact/datatable";
import styled from "styled-components";

export const TableContainerStyled = styled(DataTable)`
    overflow: hidden;
    border-radius: 15px;
    width: 1200px;
    font-size: 16px;
    
    th {
        background-color: var(--red);
        color: var(--white);
        
        .p-column-title {
            font-weight: 700;
        }

        &.p-highlight {
            background-color: var(--white);
            color: var(--red);
            svg {
                color: var(--red);
            }
        }

        svg {
            color: var(--white);
        }
    }

`

export const TableTeam = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    img {
        height: 20px;
    }
`

export const TableTeamAway = styled(TableTeam)`
    flex-direction: row-reverse;
`

export const TableNombreCompleto = styled.div`
    display: flex;
    align-items: center;

    span {
        text-transform: uppercase;
        font-weight: 700;
    }
`