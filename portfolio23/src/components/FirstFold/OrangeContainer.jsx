import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'gatsby';
import primaryButton from '../../assets/images/home/primaryButton.svg';

const StyledOrangeContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-family: "Fira Code", monospace;
  font-size: var(--fs3)
`;

const StyledOrangeLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 70%;
  border: 1px solid #fff;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  div:nth-child(2) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
`;

const StyledOrangeRight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

img {
    width: 30px;
}
`;
function OrangeContainer() {
  return (
    <StyledOrangeContainer className="wrapper">
      <StyledOrangeLeft>
        <div>
          <a
            href="https://www.linkedin.com/in/rohan-raj-9b1b3b1b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={70} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rohan-raj-9b1b3b1b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption size={70} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rohan-raj-9b1b3b1b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAlternateEmail size={70} />
          </a>
        </div>
      </StyledOrangeLeft>
      <StyledOrangeRight>
        <Link to="/projects">All Projects</Link>
        <img src={primaryButton} alt="primaryButton" />
      </StyledOrangeRight>
    </StyledOrangeContainer>
  );
}

export default OrangeContainer;
