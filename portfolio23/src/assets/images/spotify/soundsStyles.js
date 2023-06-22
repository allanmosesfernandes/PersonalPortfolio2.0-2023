import styled, { keyframes } from "styled-components";


const rotateInfinite = keyframes`
  0% { transform: rotate(0deg); }
  to {
    transform: rotate(1turn);
  }
`;
export const SpotifyCompWrapper = styled.div`
  display: flex;
  .rotate {
    animation: ${rotateInfinite} 20s linear infinite;
    transform-origin: center center;
    transform-box: fill-box;
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
`;

export const SpotifyText = styled.div`

`;


