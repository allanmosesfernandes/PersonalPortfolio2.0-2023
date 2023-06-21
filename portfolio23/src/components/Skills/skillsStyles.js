import styled from "styled-components";
import Grainy from "../../assets/images/home/bg-grain-dark.png";

export const SkillsContainer = styled.div`
  margin: 2rem auto;
  background-image: url(${Grainy});
  background-color: rgba(0, 0, 0, 0.8);
  background-attachment: fixed;
  border-radius: 10px;
  font-family: "Fira Code", monospace;
  padding: 2rem;
  .skills__title {
    font-size: var(--fs4);
    display: flex;
    align-items: center;
    gap: 2rem;
    //On hover rotate the asterik icon
    &:hover {
      img {
        transform: rotate(180deg);
        transition: transform 0.5s ease-in-out;
      }
    }
    &:after {
      content: "";
      width: 50%;
      height: 2px;
      background-color: white;
    }
    img {
      &:after {
        content: "";
        width: 50%;
        height: 2px;
        background-color: white;
      }
    }
  }

  p {
    font-size: var(--fs2);
    line-height: 1.5;
    width: 75%;
    display: flex;
    gap: 2rem;
    .ill {
      opacity: 0;
      display: inline-block;
    }
  }
`;

export const TechGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
