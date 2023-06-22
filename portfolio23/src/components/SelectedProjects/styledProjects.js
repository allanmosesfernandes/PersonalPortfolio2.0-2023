import styled from "styled-components";
import MegaCursor from "../../assets/images/project-images/mega-cursor.svg";

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
    div:nth-child(even) a{
        flex-direction: row-reverse;
    }
`;

export const ProjectSingle = styled.div`
  a {
    display: flex;
    cursor: url(${MegaCursor}), auto;
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
    height: 200px;
    display: flex;
    justify-content: center;
    img {
      padding: 1rem;
    }
  }

  .block__three {
    font-size: var(--fs5);
    font-style: italic;
    display: flex;
  }
`;
