import styled, { keyframes } from "styled-components";
import Grainy from "../../assets/images/home/bg-grain.png";
import Asterik from "../../assets/images/home/asterik.svg";

const rotateAsterik = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const FirstFoldContainer = styled.div`
  background-color: #ffffff;
  background-image: url(${Grainy});
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  border-radius: 10px;
  width: 100%;
  display: flex;
  padding: 2rem;
  z-index: 2;
  .firstFold__left {
    width: 60%;

    .body-copy {
      font-size: 4rem;
      font-family: "Fira Code";
      color: #000000;

      .rel {
        position: relative;
        display: block;
        width: 100%;
        margin: 1rem 0;

        &:hover {
          &::after {
            //rotate the asterik on hover
          }
        }

        img {
          position: absolute;
          left: -15px;
          top: -24px;
          width: 60%;
        }
      }

      .relative {
        position: relative;
        display: inline-block;
        margin: 0 1.5rem;
        img {
          position: absolute;
          left: 0;
          top: -85px;
          width: 100%;
        }
      }

      .apple__emojis {
        width: 50px;
      }
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

export const FirstFold = styled.div``;
const flightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(850%);
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
  width: 50%;
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
      animation: ${flightAnimation} 10s linear infinite;
    }
  }
`;
