import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --green: #00985f;
        --green-opacity: rgba(42, 209, 116, 0.2);;
        /* Gray Scale */
        --white: #ffffff;
        --gray-200: #65656B;
        --gray-300: #2D2F30;
        --gray-400: #1A1B1B;
        --gray-500: #101011;
        --black: #141414;
        --yellow: #E2B000;

         /* White */
        --white-0: #FDFDFD;
        --white-50: #F0F0F0;
        --white-100: #E4E4E4;
        --white-200: #D7D7D7;
        --white-300: #CACACA;
        --white-400: #BDBDBD;
        --white-500: #B0B0B0;
        --white-600: #A4A4A4;
        --white-700: #979797;
        --white-800: #8A8A8A;
        --white-900: #7E7E7E;

        /* Black */
        --black-0: #71716F;
        --black-50: #656563;
        --black-100: #575757;
        --black-200: #4A4A4A;
        --black-300: #3D3D3D;
        --black-400: #303030;
        --black-500: #242424;
        --black-600: #171717;
        --black-700: #0A0A0A;
        --black-800: #050505;
        --black-900: #000000;

        /* Green */
        --green-50: #F3FAF7;
        --green-100: #DEF7EC;
        --green-200: #BCF0DA;
        --green-300: #84E1BC;
        --green-400: #31C48D;
        --green-500: #0E9F6E;
        --green-600: #057A55;
        --green-700: #046C4E;
        --green-800: #03543F;
        --green-900: #014737;

        /* Red */
        --red: #E0040B;
        --red-50: #FDF2F2;
        --red-100: #FDE8E8;
        --red-200: #FBD5D5;
        --red-300: #F8B4B4;
        --red-400: #F98080;
        --red-500: #F05252;
        --red-600: #E02424;
        --red-700: #C81E1E;
        --red-800: #9B1C1C;
        --red-900: #771D1D;


        --success: #22C55E;
        --danger: #EF4444;
        --import: #6366F1;
        --export: #A855F7;

        --border: 1px solid var(--white-100);
        --radius: 16px;
        --padding: 14px 20px;
    }
    

    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        background-color: var(--white-50);
        color: var(--black-800);
    }


    * {
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Albert Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    p {
        font-size: 14px;
        font-weight: 500;
    }

    a {
        color: var(--black-800);
    }

    ul {
        display: block;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
        unicode-bidi: isolate;
    }

    /* Dropdown */
    .p-dropdown-items-wrapper {
        .p-dropdown-items {
            .p-dropdown-item {
                padding: 8px 16px;
                font-weight: 300;
                color: var(--black-900);
                border: none !important;
                font-size: 14px;

                &:not(.p-highlight):not(.p-disabled):hover {
                    box-shadow: none;
                    background-color: var(--white-50);
                }

                &.p-highlight {
                    background-color: var(--white-50);
                    color: var(--black-900);
                }

                &:hover {
                    border-color: var(--red);
                }

                span {
                    &:focus-visible {
                        outline: none;
                    }
                }

                &:focus-visible {
                    outline: none;
                }
            }
        }
    }
    
`