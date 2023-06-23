import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Fira Code", monospace;
`;

export const ContactMarquee = styled.div`
  font-size: 15rem;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--base-gray);
  border-bottom: 1px solid var(--base-gray);
  //align image and text inside p tag
  p {
    display: flex;
    margin: 2rem 0;
    img {
      width: 80px;
      margin: auto 2rem;
    }
  }
  //Media Queries
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  color: white;

  .contact__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--base-gray);
  }
`;

export const MegaEmail = styled.div`
  color: rgba(255, 254, 244, 0.3);
  font-size: var(--fs5);
  text-align: center;
  border-bottom: 1px solid var(--base-gray);
  padding: 2rem 0;
`;

export const EditorsNote = styled.div`
  margin: auto;
  justify-content: center;
  display: flex;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #64748b;
  text-align: center;
  width: 100%;
  a {
    color: #94a3b8;
    text-decoration: underline;
  }
`;