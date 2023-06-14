import styled, { keyframes } from 'styled-components';

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
// Apply the animation to the image
export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Fira Code", monospace;

  h2 {
    font-weight: 500;
    font-size: 2.5rem;
  }
  img {
    width: 80px;
    animation: ${rotateAnimation} 60s infinite linear; /* Adjust the duration (10s) for desired speed */
  }
  //Give Span element a blinking effect using animation
  span {
    color: var(--base-orange);
    animation: ${blinkAnimation} 3s infinite;
  }
`;
export const StyledNavbarLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  a {
    margin-left: 2rem;
    font-size: 2rem;
  }
`;

export const StyledNavbarHead = styled.div``;
