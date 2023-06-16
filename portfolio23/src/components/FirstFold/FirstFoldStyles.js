import styled from 'styled-components';


export const FirstFoldContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  display: flex;
  padding: 2rem;

  .firstFold__left {
  }
  .firstFold__right {
    margin-left: auto;
    border-radius: 60px;
    position: relative;
    background-color: var(--base-orange);
    //make it in the shape of an airplane window
    clip-path: ellipse(35% 50% at 50% 50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

  }
`;

export const FirstFold = styled.div`

`;

export const FlightPath = styled.div`
  display: flex;
  align-items: center;
  color: #d1cece;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Fira Code", monospace;
  width: 50%;
  height: min-content;
  .flight-path__line {
    width: 100%;
    height: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 4px,
      rgb(209, 206, 206) 4px,
      rgb(209, 206, 206) 6px
    );

    img {
      width: 30px;
    }
  }
`;
