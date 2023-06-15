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

export const MenuToggle = styled.div`
cursor: pointer;

.hamBox {
  position: relative;
  width: 44px;
  height: 44px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  padding: 2.4em;
  &:hover {
    background: #2a2a2f;
  }

}

.hamBoxOpen {
  background: #2a2a2f;
  position: relative;
}

.lineTop, .lineBottom {
  margin: 0 auto;
  position: absolute;
  display: block;
  width: 24px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  left: 0;
  right: 0; 
  transform: rotate(0deg); 
  transition: all 0.5s ease-in-out;
}

.lineTop {
  top: 2.2em;

  &.spin {
    transform: rotate(135deg);
    top: 2.35em;
    background-color: #fff;
  };
}
.lineBottom {
  bottom: 2.2em;

  &.spin {
    transform: rotate(225deg);
    background: #fff;
    bottom: 2.35em;
  }
}
`;
// Apply the animation to the image
export const StyledNavbar = styled.nav`
  .nav-overlay {
    position: fixed;
    top: -100%;
    background-color: #18181c;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 3rem;
  }
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
