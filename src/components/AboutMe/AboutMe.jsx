import React from "react";
import { AboutContainer, AboutLeft, AboutRight } from "./about-styles";
import nerd from "../../assets/images/home/nerd.png";
import Arrow from "../../assets/images/about/arrow.svg";


const AboutMe = () => {
  return (
    <AboutContainer className="wrapper">
      <AboutLeft>
        <img src={nerd} className="about__picture" />
        <p>
          Hi, I'm Allan.
        </p>
        <img src={Arrow} className="about__arrow" />
        <p>
          I'm a front-end developer born in Goa, raised in Mumbai and currently in Nottingham, UK pursuing my masters in computer science from NTU.
        </p>
        <p>
          I am 26 years old and still find the word Lauda Lasson to be amusing.
        </p>
      </AboutLeft>
      <AboutRight>
        <h2>Contact</h2>
      </AboutRight>
    </AboutContainer>
  );
};

export default AboutMe;