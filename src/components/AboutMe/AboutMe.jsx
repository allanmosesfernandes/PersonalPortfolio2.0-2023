import React from "react";
import { AboutContainer, AboutLeft, Places, WorkPlaces } from "./about-styles";
import Typewriter from "typewriter-effect";
import nerd from "../../assets/images/home/nerd.png";
import Arrow from "../../assets/images/about/arrow.svg";
import DMG from "../../assets/images/about/orgs/dmg.svg";
import NTSU from "../../assets/images/about/orgs/ntsu.png";
import TSL from "../../assets/images/about/orgs/tsl.png";
import Unifynd from "../../assets/images/about/orgs/unifynd.png";
import BashTerminal from "./bashTerminal";

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
          {" "}
          raised in{" "}
          <a
            href="https://www.tripadvisor.co.uk/Tourism-g304554-Mumbai_Maharashtra-Vacations.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mumbai{" "}
          </a>
          currently in{" "}
          <a
            href="https://www.visit-nottinghamshire.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nottingham
          </a>{" "}
          pursuing my Masters in Computer Science from NTU.
          <br />
          Currently on my placement year at{" "}
          <a href="https://www.trentstudents.org/">NTSU</a>.<br /> I also play
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
          <WorkPlaces>
            <a
              href="https://www.trentstudents.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={NTSU} alt="" title="NTSU" />
            </a>
            <a
              href="https://www.thisisdmg.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={DMG} alt="" title="This is DMG" />
            </a>
            <a
              href="https://www.thestarterlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={TSL} alt="" title="The Starter Labs" />
            </a>
            <a
              href="https://www.unifynd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Unifynd} alt="" title="Unifynd Technologies" />
            </a>
          </WorkPlaces>
        </Places>
        <BashTerminal />
      </AboutLeft>
    </AboutContainer>
  );
};

export default AboutMe;