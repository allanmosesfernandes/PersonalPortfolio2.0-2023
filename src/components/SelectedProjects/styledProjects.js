import styled from "styled-components";
import MegaCursor from "../../assets/images/project-images/mega-cursor.svg";
import Grainy from "../../assets/images/home/bg-grain-dark.png";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Fira Code", monospace;
  .projects__title {
    font-size: var(--fs4);
    margin: 3rem 0 0 0;
    padding: 3rem 0;
    border-top: 2px solid var(--base-gray);
    border-bottom: 2px solid var(--base-gray);
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //target every even div child
  div:nth-child(even) a {
    flex-direction: row-reverse;
  }

  @media only screen and (max-width: 1000px) {
    //code goes here

    div:nth-child(even) a {
      flex-direction: column-reverse;
    }
  }
`;

export const ProjectSingle = styled.div`
  a {
    display: flex;
    cursor: url(${MegaCursor}), auto;
  }
  @media only screen and (max-width: 1000px) {
    //code goes here
    a {
      flex-direction: column-reverse;
    }
    .block__one {
      text-align: center;
      .block_title {
        font-size: var(--fs2);
      }
    }
  }
  border-bottom: 2px solid var(--base-gray);
  font-size: 1.5rem;
  > div {
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .block__one {
    min-width: 200px;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    .block_title {
      font-style: italic;
    }
  }
  //target 2nd div in grid
  .block__two {
    border-left: 2px solid var(--base-gray);
    border-right: 2px solid var(--base-gray);
    min-width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    img {
      padding: 1rem;
      object-fit: contain;
    }
  }

  .block__three {
    font-size: var(--fs5);
    font-style: italic;
    display: flex;
  }
  @media only screen and (max-width: 1000px) {
    //code goes here
    .block__two {
      border: none;
      min-width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      img {
        object-position: center;
        object-fit: cover;
        border: 1px solid var(--base-orange);
        padding: 2rem;
      }
    }
    .block__three {
      font-size: var(--fs3);
    }
  }
`;
