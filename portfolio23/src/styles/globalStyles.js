import { createGlobalStyle } from 'styled-components';
import customCursor from "../assets/images/home/icons8-cursor.svg";
import PPMoriRegular from "../assets/fonts/PPMori-Regular.otf";

const GlobalStyle = createGlobalStyle`

:root {
  --base-black:  #192227;
  --base-orange: #F9A600;
    font-size: 10px;
}
*,
*:before,
*:after {
    box-sizing: border-box;
}
html {
  cursor: url(${customCursor}), auto;
}
body {
    background-color: var(--base-black);
    background-size: cover;
    color: white;
}

@font-face {
  font-family: 'PPMori-Regular', sans-serif;
  src: url(${PPMoriRegular}) format('opentype');
  font-weight: normal;
  font-style: normal;
}

button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
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
