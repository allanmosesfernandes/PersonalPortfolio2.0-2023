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
    border-top: 1px solid var(--base-gray);
    border-bottom: 1px solid var(--base-gray);
  }
`;

export const ProjectsWrapper = styled.div`
    display: flex;
`;

export const ProjectSingle = styled.div`
  a {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    cursor: url(${MegaCursor}), auto;
  }
  border-bottom: 1px solid var(--base-gray);
  font-size: 1.5rem;
  > div {
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .block__one {
    .block_title {
        font-style: italic;
    }
  }
  //target 2nd div in grid
  .block__two {
    border-left: 1px solid var(--base-gray);
    border-right: 1px solid var(--base-gray);
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }

  .block__three {
    font-size: var(--fs5);
    font-style: italic;
    display: flex;
  }
`;
