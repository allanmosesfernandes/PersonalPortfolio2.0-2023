import styled, { keyframes } from "styled-components";


const rotateInfinite = keyframes`
  0% { transform: rotate(0deg); }
  to {
    transform: rotate(1turn);
  }
`;
export const SpotifyCompWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .rotate {
    animation: ${rotateInfinite} 20s linear infinite;
    transform-origin: center center;
    transform-box: fill-box;
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
`;

export const SpotifyIntro = styled.div`
  display: flex;
  gap: 1rem;
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 2rem;
  img {
    width: 25px;
  }
  .intro__left {
    width: 40%;
    padding: 2rem;
  }
  .intro__right {
    width: 60%;
    iframe {
      border-radius: 12px;
      width: 100%;
      height: 352px;
      box-shadow: 5px 5px 1px 0px rgba(156, 144, 156, 1);
    }
  }
`;
