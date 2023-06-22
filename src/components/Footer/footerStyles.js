import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContactMarquee = styled.div`
  font-family: "Fira Code", monospace;
  font-size: 20rem;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--base-gray);
  //align image and text inside p tag
  p {
    display: flex;
    margin: 2rem 0;
    img {
      width: 50px;
      margin: auto 2rem;
    }
  }

`;
