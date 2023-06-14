import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    
}
*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    background-color: #000;
    background-size: cover;
}

.gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

 img {
    max-width: 100%;
  }

a {
    text-decoration: none;
    color: inherit;
}

.wrapper {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
}
`;

export default GlobalStyle;
