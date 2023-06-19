import styled, { keyframes } from 'styled-components';

export const FirstFoldContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  display: flex;
  padding: 2rem;

  .firstFold__left {
    width: 60%;

    .body-copy {
      color: var(--base-orange);
      font-size: 2rem;
      font-family: ;
    }

  }
  .firstFold__right {
    margin-left: auto;
    border-radius: 60px;
    position: relative;
    background-color: #89bfd9;
    //==make it in the shape of an airplane window==//
    clip-path: ellipse(35% 50% at 50% 50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    img {
      width: 80%;
    }
  }
`;

export const FirstFold = styled.div`

`;
const flightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1700%);
  }
`;

export const FlightPath = styled.div`
  display: flex;
  align-items: center;
  color: #d1cece;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Fira Code", monospace;
  height: min-content;

  .flight-path__line {
    width: 100%;
    margin: 0 3rem;
    height: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 4px,
      rgb(209, 206, 206) 4px,
      rgb(209, 206, 206) 6px
    );

    img {
      width: 30px;
      position: absolute;
      left: 0;
      animation: ${flightAnimation} 20s linear infinite;
    }
  }
`;
