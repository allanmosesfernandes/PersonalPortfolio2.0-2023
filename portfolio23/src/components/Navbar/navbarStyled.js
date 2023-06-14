import styled, { keyframes } from "styled-components";

// Define the rotation animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Apply the animation to the image
export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-family: "Fira Code", monospace;
  font-size: 1.8rem;
  img {
    width: 80px;
    animation: ${rotateAnimation} 60s infinite linear; /* Adjust the duration (10s) for desired speed */
  }
  span {
    color: var(--base-orange);
  }
`;

export const StyledNavbarHead = styled.div``;
