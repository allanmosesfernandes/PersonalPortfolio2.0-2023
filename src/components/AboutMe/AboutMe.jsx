import React from "react";
import { AboutContainer, AboutLeft, AboutRight, Places } from "./about-styles";
import Typewriter from "typewriter-effect";
import Goa from "../../assets/images/home/wave.png";
import bow from "../../assets/images/home/bow.png";
import auto from "../../assets/images/home/auto.png";
import nerd from "../../assets/images/home/nerd.png";
import Arrow from "../../assets/images/about/arrow.svg";
import united from "../../assets/images/about/united.png";

const AboutMe = () => {
  return (
    <AboutContainer className="wrapper">
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
          <a href="https://www.tripadvisor.co.uk/Attractions-g297604-Activities-c61-t52-Goa.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="city__life goa">
              Goa
              <img src={Goa} alt="lorem" />
            </span>
          </a>
          raised in{" "}
          <a href="https://www.tripadvisor.co.uk/Tourism-g304554-Mumbai_Maharashtra-Vacations.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="city__life bom">
              Mumbai
              <img src={auto} alt="lorem" />
            </span>
          </a>
          currently in{" "}
          <a href="https://www.visit-nottinghamshire.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="city__life notts">
              Nottingham
              <img src={united} alt="lorem" />
            </span>
          </a>
          pursuing my Masters in Computer Science from NTU.
        </p>
        <p>
          I also play football,{" "}
          <a
            href="https://youtu.be/1IKM0uO5Stc"
            target="_blank"
            rel="noopener noreferrer"
          >
            listen to afrobeats
          </a>{" "}
          and go on runs to to get my ass of the computer.
        </p>
      </AboutLeft>
      <Places>
        <h3>I've worked for</h3>
      </Places>
    </AboutContainer>
  );
};

export default AboutMe;