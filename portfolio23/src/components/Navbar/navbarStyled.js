import styled, { keyframes } from "styled-components";
import squiggly from "../../assets/images/home/squiggly.svg";

// Define the rotation animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
// Blinking effect animation
const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledHamburger = styled.div`
  /* Icon 3 */
  width: 50px;
  height: 20px;
  position: relative;
  margin-left: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 18px;
  }

  span:nth-child(4) {
    top: 36px;
  }

  .open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;
// Apply the animation to the image
export const StyledNavbar = styled.nav`

  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  font-family: "Fira Code", monospace;
  font-size: 2rem;
  justify-content: space-between;
  background: rgb(0 0 0 / 23%);
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent;

  &:hover {
    background: rgb(0 0 0);
    border: 2px solid var(--base-orange);
  }
  border-radius: 50px;
  margin: 3rem;
  h2 {
    font-weight: 500;
    font-size: 2.5rem;
    span {
      color: var(--base-orange);
      animation: ${blinkAnimation} 3s infinite;
    }
  }
  img {
    width: 80px;
    animation: ${rotateAnimation} 60s infinite linear;
    /* Adjust the duration (10s) for desired speed */
  }
`;
export const StyledNavbarLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 2rem;
    color: var(--base-orange);
    transition: all 0.2s ease-in-out;
    background-position-y: bottom;
    border-bottom: 1px dashed var(--base-orange);
    position: relative;
    &:hover {
      color: white;
      background-image: url(${squiggly});
      background-size: auto 6px;
      background-repeat: repeat-x;
      text-decoration: none;
      border-bottom: none;
      transition: all 0.2s ease-in-out;
    }

  }
`;

export const StyledNavbarHead = styled.div``;
