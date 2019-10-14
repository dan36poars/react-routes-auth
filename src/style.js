import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle ` 
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

 * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #9E1F9E;
        background-size: cover;
        -webkit-font-smoothing: antialiased !important;
        color: #FFF;
    }

    html, body, #root {
        min-height: 100%;
    }

    body, input, button {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }
`;