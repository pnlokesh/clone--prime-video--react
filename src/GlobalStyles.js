import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    .container{
        width: min(1340px, 94vw);
        margin: 0 auto;
    }

`;

export default GlobalStyles;
