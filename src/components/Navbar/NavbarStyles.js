import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Templates/Templates";

export const NavbarTopContainer = styled(ContainerStyled)`
    height: 40px;
    background-color: var(--black);
    color: var(--white);
    
    @media (max-width: 1200px) {
        
    }

    @media (max-width: 960px) {
        
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }

    @media (max-width: 350px) {
        
    }
`

export const NavbarTopWrapper = styled(WrapperStyled)`
    justify-content: space-between;
    h1 {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 400;
        span {
            font-weight: 900;
        }
    }
`

export const NavbarTopSocial = styled.div`
    display: flex;
    gap: 10px;
    a svg {
        font-size: 14px;
        color: var(--white);
    }
`

export const NavbarContainerStyled = styled(ContainerStyled)`
    height: 70px;
    background-color: var(--red);
    @media (max-width: 480px) {
        height: 50px;
    }
`

export const NavbarWrapper = styled(WrapperStyled)`
    justify-content: space-between;
`

export const NavbarLogo = styled.div`
    height: fit-content;
    display: flex;
    gap: 10px;
    align-items: center;

    img {
        height: 50px;
        @media (max-width: 480px) {
            height: 30px;
        }
    }
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 20px;

    li a {
        font-weight: 600;
        color: var(--white);
        text-transform: uppercase;
    }

    @media (max-width: 968px) {
        display: none;
    }
`

export const NavbarBars = styled.div`
    display: none;
    color: var(--white);
    @media (max-width: 968px) {
        display: flex;
        font-size: 30px;
    }
`