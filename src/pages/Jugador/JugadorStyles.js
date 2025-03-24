import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../../components/Templates/Templates";

export const JugadorContainer = styled(ContainerStyled)``
export const JugadorWrapper = styled(WrapperStyled)``

export const JugadorInfoWrapper = styled.div`
    background-color: var(--black-0);
    border: 1px solid var(--black-200);
    padding: 20px;
    width: 100%;
    border-radius: 16px;

    img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
`