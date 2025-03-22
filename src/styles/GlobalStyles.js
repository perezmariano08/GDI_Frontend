import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #E0040B;
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

        --black-0: #FFFFFF;
        --black-50: #FAFAFA;
        --black-100: #f5f5f5;
        --black-200: #F0F0F0;
        --black-300: #B3B3B3;
        --black-400: #999999;
        --black-500: #818181;
        --black-600: #666666;
        --black-700: #4D4D4D;
        --black-800: #333333;
        --black-900: #1A1A1A;
        --black-950: #0D0D0D;

        --success: #22C55E;
        --danger: #EF4444;
        --import: #6366F1;
        --export: #A855F7;

        
    }
    

    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        background-color: var(--black-50);
    }


    * {
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    p {
        font-size: 16px;
    }
`