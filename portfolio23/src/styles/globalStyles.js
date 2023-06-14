import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --base-black:  #192227;
  --base-orange: #F9A600;
}
*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    background-color: var(--base-black);
    background-size: cover;
    color: white;
    font-size: 10px;
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
