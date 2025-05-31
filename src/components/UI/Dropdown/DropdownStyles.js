import { Dropdown } from "primereact/dropdown";
import styled from "styled-components";

export const DropdownStyled = styled(Dropdown)`
    padding: 8px 16px;
    border-radius: 10px;
    background-color: transparent;
    min-width: 200px;
    border: 2px solid var(--red);
    
    .p-dropdown-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--red);
        padding: 0;
        &.p-placeholder {
            color: var(--white-500);
            font-weight: 300;
        }
    }

    .p-dropdown-trigger {
        width: fit-content;
        margin-left: 20px;

        svg {
            color: var(--black-600);
        }
    }

    &:not(.p-disabled):hover {
        border-color: var(--red);
    }

    &:not(.p-disabled).p-focus {
        outline: 0 none;
        outline-offset: 0;
        box-shadow: 0 0 0 0.2rem var(--red-100);
        border-color: var(--red);
    }
    

    &:focus-visible {
        outline: var(--yellow) auto 1px;
    }
`