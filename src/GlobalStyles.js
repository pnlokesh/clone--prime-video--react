import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
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

    .circular-loading{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    .app__body{
        position: relative;
        top: 80px;
    }

`;

export default GlobalStyles;
