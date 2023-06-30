import styled from "styled-components";

export const StyledPageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Fira Code", monospace;
    font-size: var(--fs5);
`;

export const StyledIllustration = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  img {
    width: 200px;
    height: 200px;
    position: relative;
  }
  .smiley {
    position: relative;
    cursor: pointer;
  }
  //rotate animation 
    @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        }
    }


  .abs {
    position: absolute;
    left: 0;
    animation: rotate 10s linear infinite;
  }
`;
