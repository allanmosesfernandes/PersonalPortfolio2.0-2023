import styled from "styled-components";

export const FirstFoldContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  display: flex;
  padding: 2rem;

  .firstFold__left {
  }
  .firstFold__right {
    margin-left: auto;
    border-radius: 60px;
    position: relative;
    background-color: var(--base-orange);
    //make it in the shape of an airplane window
    clip-path: ellipse(35% 50% at 50% 50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

  }
`;

export const FirstFold = styled.div`

`;
