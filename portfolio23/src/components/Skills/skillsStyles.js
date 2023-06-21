import styled from "styled-components";
import Grainy from "../../assets/images/home/bg-grain-dark.png";

export const SkillsContainer = styled.div`
  margin: 2rem auto;
  background-image: url(${Grainy});
  background-attachment: fixed;
  border-radius: 10px;

  .skills__title {
    font-size: var(--fs4);
    font-family: "Fira Code", monospace;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    //On hover rotate the asterik icon
    &:hover {
        img {
            transform: rotate(180deg);
            transition: transform 0.5s ease-in-out;
        }
  }
}
`;

export const lodaLasson = styled.div`
    background-color: #ffffff;
`;
