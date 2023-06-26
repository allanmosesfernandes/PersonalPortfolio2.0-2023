import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Fira Code", monospace;

  .backLink {
    font-size: var(--fs2);
    color: var(--base-orange);
    &:before {
        content: "←";
        margin-right: 0.5rem;
    }
  }
  h1 {
    font-size: 3rem;
  }
`;