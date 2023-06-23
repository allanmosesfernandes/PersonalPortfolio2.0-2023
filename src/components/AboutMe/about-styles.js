import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Fira Code', monospace;
    font-size: var(--fs2);
`;
export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 2rem;
  .about__picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: black;
  }

  .about__arrow {
    width: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutRight = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;    
    width: 40%; 
    margin: 0 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;


