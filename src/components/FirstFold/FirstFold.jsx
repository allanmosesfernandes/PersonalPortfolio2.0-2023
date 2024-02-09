/* eslint-disable max-len */
import React from "react";
import { FirstFoldContainer, FlightPath, Init } from "./FirstFoldStyles";
import nerd from "../../assets/images/home/nerd.png";
import Flight from "../../assets/images/home/flight.svg";
import Circle from "../../assets/images/home/circleSVG.svg";
import Scratch from "../../assets/images/home/scratch.png";
import OrangeContainer from "./OrangeContainer";
import {motion, useInView, animate } from "framer-motion";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
import { SiGmail } from "react-icons/si";
function FirstFold() {
  
  const StyledOrangeLeft = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
width: 70%;
border: 1px solid #fff;
border-radius: 10px;
margin: 2rem 0;
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
@media only screen and (max-width: 768px) {
  //code goes here
  width: 100%;
  svg {
    width: 50px;
    height: 50px;
  }
}
@media only screen and (max-width: 500px) {
  //code goes here
  svg {
    width: 40px;
    height: 40px;
  }
}
`;

  return (
    <Init>
      <FirstFoldContainer className="wrapper">
        <div className="firstFold__left">
          <FlightPath>
            <p className="flight-path__origin">BOM</p>
            <div className="flight-path__line">
              <img src={Flight} alt="Flight" />
            </div>
            <p className="flight-path__origin">LHR</p>
          </FlightPath>
          <div className="body-copy">
            <p>
              <span className="rel">
                <img src={Circle} alt="circle" />
                front-end developer{" "}
              </span>{" "}
            </p>
            <p>
              I like
              <span className="relative">
                <img src={Scratch} alt="asd" style={{width: "fit-content"}}/>
                breaking
              </span>
              making cool things that live on the internet.
            </p>
            <p>
              I've been making websites for almost three years often using pure
              Javascript, (S)CSS, jQuery and other random web tech.
            </p>
            <p>
              {" "}
              I'm currently messing around and trying to get better at Typescript &
              Node.js.
            </p>
            <p>
              Focused on building accessible products while also genuinely
              caring about user experience.
            </p>
            <p>
                Oh, and these days, I'm diving into full-stack development. Figured it's time to tackle the whole tech stack, not just the shiny frontend stuff.
            </p>
            <div>
              <StyledOrangeLeft>
                <div>
                  <a
                    href="https://github.com/allanmosesfernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github Profile"
                  >
                    <AiFillGithub size={50} />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/allanmosesfernandes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLinkedinOption size={50} />
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:fernzallan14@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail size={50} />
                  </a>
                </div>
              </StyledOrangeLeft>
            </div>
          </div>
        </div>
        <div className="firstFold__right">
          <div className="window-pane" />
          {/* how can I slow this down? */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={nerd} alt="nerd" />
          </motion.div>
        </div>
      </FirstFoldContainer>
      <OrangeContainer />
    </Init>
  );
}

export default FirstFold;
