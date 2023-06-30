/* eslint-disable max-len */
import React from "react";
import { FirstFoldContainer, FlightPath, Init } from "./FirstFoldStyles";
import nerd from "../../assets/images/home/nerd.png";
import Flight from "../../assets/images/home/flight.svg";
import Circle from "../../assets/images/home/circleSVG.svg";
import Scratch from "../../assets/images/home/scratch.png";
import OrangeContainer from "./OrangeContainer";
import {motion, useInView, animate } from "framer-motion";
function FirstFold() {
  return (
    <Init>
      <FirstFoldContainer className="wrapper" id="blackCursor">
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
                <img src={Scratch} alt="asd" />
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
              I'm currently messing around and trying to get better at NextJS &
              Node.js.
            </p>
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
