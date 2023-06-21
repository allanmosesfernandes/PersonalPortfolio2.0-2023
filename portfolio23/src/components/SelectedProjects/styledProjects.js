import styled from "styled-components";

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
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  border-bottom: 1px solid var(--base-gray);

  > div {
    padding: 1rem;
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
`;
