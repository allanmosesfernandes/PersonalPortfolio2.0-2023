import styled from "styled-components";
import Goa from "../../assets/images/home/wave.png";
import bow from "../../assets/images/home/bow.png";
import auto from "../../assets/images/home/auto.png";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Fira Code', monospace;
    font-size: var(--fs2);
    margin-top: 10rem;
`;
export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 2rem;
  a {
    text-decoration: underline;
    letter-spacing: 0rem;
  }
  p {
    margin: 1rem 0;
    line-height: 2;
  }
  .city__life {
    text-decoration: underline;
    display: inline-flex;
    img {
        width: 30px;
        height: 30px;
        margin: 0 1rem;
    }
    &.goa {

    }

    &.bom {
      
    }

    &.notts {
      img {
      }
    }
  }
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

  .type {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutRight = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;    
    margin: 0 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;


export const Places = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    `;