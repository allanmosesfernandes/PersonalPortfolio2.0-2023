import styled from "styled-components";
import squiggly from "../../assets/images/home/squiggly.svg";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Fira Code', monospace;
    font-size: 1.5rem;
    margin-top: 10rem;
`;
export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 2rem;
  a {
    border-bottom: 1px dashed var(--base-orange);
    letter-spacing: 0rem;
    position: relative;
    background-position-y: bottom;
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
  p {
    margin: 1rem 0;
    line-height: 1.5;
  }
  .city__life {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    img {
      width: 30px;
      height: 30px;
      margin: auto 1rem;
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
    margin-bottom: -10px;
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