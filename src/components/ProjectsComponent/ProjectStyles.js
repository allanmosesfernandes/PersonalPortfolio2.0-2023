import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Fira Code", monospace;

  .project__table {
    font-size: 1.5rem;
    border-collapse: collapse;

    thead {
      text-align: left;
    }
    tr {
      padding-bottom: 1rem;
    }
    th,
    td {
      border-bottom: 1px solid white;
      padding: 1.5rem 2rem;
    }

    .project__link {
      position: relative;
      &:after {
        //show top right arrow
      position: absolute;
      content: "↗";
      right: -2rem;
      top: -1rem;
    }
  }

  .built__with {
    margin-right: 5px;
    border-radius: 5px;
    background-color: var(--base-orange);
    padding: 1rem 0.5rem;
    opacity: 0.8;
    display: inline-block;
    margin: 1rem;
  }
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
