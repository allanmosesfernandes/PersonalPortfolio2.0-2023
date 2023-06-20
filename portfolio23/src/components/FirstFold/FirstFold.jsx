/* eslint-disable max-len */
import React from "react";
import { AsterikIcon, FirstFoldContainer, FlightPath } from "./FirstFoldStyles";
import nerd from "../../assets/images/home/nerd.png";
import Flight from "../../assets/images/home/flight.svg";
import Circle from "../../assets/images/home/circleSVG.svg";
import Wave from "../../assets/images/home/wave.png";
import Bow from "../../assets/images/home/bow.png";
import Auto from "../../assets/images/home/auto.png";
import Scratch from "../../assets/images/home/scratch.png";
import asterik from "../../assets/images/home/asterik.svg";

function FirstFold() {
  return (
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
            {/* born in goa{" "}
            <img src={Wave} alt="Beach Waves" className="apple__emojis" />,
            <br />
            raised in Mumbai{" "}
            <img src={Auto} alt="Auto" className="apple__emojis" />, 
            <br />
            based in
            Nottingham <img src={Bow} alt="Bow" className="apple__emojis" />
            <br /> */}
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
            I've been making websites for the past two and a half years often
            using pure Javascript, (S)CSS, jQuery and other random web tech.
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
        <img src={nerd} alt="nerd" />
      </div>
    </FirstFoldContainer>
  );
}

export default FirstFold;
