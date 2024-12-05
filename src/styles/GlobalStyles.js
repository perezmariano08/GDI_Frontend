import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #E0040B;
        --green: #2AD174;
        --green-opacity: rgba(42, 209, 116, 0.2);;
        /* Gray Scale */
        --white: #fafafa;
        --gray-200: #65656B;
        --gray-300: #2D2F30;
        --gray-400: #1A1B1B;
        --gray-500: #101011;
        --black: #141414;
        --yellow: #E2B000;

        --success: #22C55E;
        --danger: #EF4444;
        --import: #6366F1;
        --export: #A855F7
    }

    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        background-color: var(--white);
        color: var(--white);
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

`