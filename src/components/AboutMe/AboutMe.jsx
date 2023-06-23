import React from "react";
import { AboutContainer, AboutLeft, Places } from "./about-styles";
import Typewriter from "typewriter-effect";
import Goa from "../../assets/images/home/wave.png";
import bow from "../../assets/images/home/bow.png";
import auto from "../../assets/images/home/auto.png";
import nerd from "../../assets/images/home/nerd.png";
import Arrow from "../../assets/images/about/arrow.svg";
import united from "../../assets/images/about/united.png";

const AboutMe = () => {
  return (
    <AboutContainer className="">
      <AboutLeft>
        <img src={nerd} className="about__picture" />
        <p>Hey! I'm Allan.</p>
        <img src={Arrow} className="about__arrow" />
        <p className="type">
          a &nbsp;
          <Typewriter
            options={{
              strings: ["CSS fanboy", "Coffee enthusiast", "Perpetual learner"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p>
          I'm a front-end developer born in{" "}
          <a
            href="https://www.tripadvisor.co.uk/Attractions-g297604-Activities-c61-t52-Goa.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Goa
          </a>
          {/* <span className="city__life goa">
            <img src={Goa} alt="lorem" />
          </span> */}{" "}
          raised in{" "}
          <a
            href="https://www.tripadvisor.co.uk/Tourism-g304554-Mumbai_Maharashtra-Vacations.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mumbai{" "}
          </a>
          {/* <span className="city__life bom">
            <img src={auto} alt="lorem" />
          </span> */}
          currently in{" "}
          <a
            href="https://www.visit-nottinghamshire.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nottingham
          </a>{" "}
          {/* <span className="city__life notts">
            <img src={united} alt="lorem" />
          </span> */}
          pursuing my Masters in Computer Science from NTU. I also play
          football,{" "}
          <a
            href="https://youtu.be/1IKM0uO5Stc"
            target="_blank"
            rel="noopener noreferrer"
          >
            listen to afrobeats
          </a>{" "}
          and go on runs to to get my ass of the computer.
        </p>
        <Places>
          <h3>I've worked for</h3>
          <div className="workplaces">
            
          </div>
        </Places>
      </AboutLeft>
    </AboutContainer>
  );
};

export default AboutMe;