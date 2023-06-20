import { createGlobalStyle } from 'styled-components';
import customCursor from "../assets/images/home/icons8-cursor.svg";
import blackCursor from "../assets/images/home/cursorblack.svg";
import PPMoriRegular from "../assets/fonts/PPMori-Regular.otf";
import Grid from "../assets/images/home/grid.svg";

const GlobalStyle = createGlobalStyle`

:root {
  --base-black:  #192227;
  --base-orange: #F9A600;
    font-size: 10px;
    --fs4: 4rem;
    --fs3: 3rem; 
    --fs2: 2rem;
    --fs1: 1rem;
    --fs1-5: 1.5rem;
    --fs0: 0.5rem;
}
*,
*:before,
*:after {
    box-sizing: border-box;
}
html {
  cursor: url(${customCursor}), auto;
}

#blackCursor {
  cursor: url(${blackCursor}), auto !important;
}


body {
    background-color: var(--base-black);
    background-size: cover;
    color: white;

    &:before {
      content: "";
      background-image: url(${Grid});
      background-size: 100%;
      position: fixed;
      top: 0;
      left: 6rem;
      right: 6rem;
      bottom: 0;
      transform: scaleY(var(--zero));
      transform-origin: 0 0;
      z-index: 1;
      pointer-events: none;
    }

    
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
