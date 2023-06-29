import React from "react";
import { SkillsContainer, TechGrid, Terminal } from "./skillsStyles";
import Asterik from "../../assets/images/home/asterik.svg";
import red from "../../assets/images/skills/buttons/red.svg";
import orange from "../../assets/images/skills/buttons/orange.svg";
import green from "../../assets/images/skills/buttons/green.svg";
import html from "../../assets/images/skills/html-5.svg";
import css3 from "../../assets/images/skills/css-3.svg";
import javascript from "../../assets/images/skills/javascript.svg";
import react from "../../assets/images/skills/react.svg";
import jquery from "../../assets/images/skills/jquery.svg";
import sass from "../../assets/images/skills/sass.svg";
import styledIcon from "../../assets/images/skills/styled-components-1.svg";
import bootstrap from "../../assets/images/skills/bootstrap.svg";
import gatsbyIcon from "../../assets/images/skills/gatsby.svg";
import githubIcon from "../../assets/images/skills/github-icon.svg";
import wordpress from "../../assets/images/skills/wordpress-icon.svg";
import netlify from "../../assets/images/skills/netlify.svg";
import sanity from "../../assets/images/skills/sanity.svg";
import firebase from "../../assets/images/skills/firebase.svg";
import figma from "../../assets/images/skills/figma.svg";

function Skills() {
  return (
    <SkillsContainer className="wrapper">
      <div className="skills__title">
        <img src={Asterik} alt="Asterik" />
        Skills & Tools
      </div>
      <p>
        <img src={Asterik} alt="Asterik" className="ill" />
        Programming languages, frameworks, tools & products I've either had
        hands-down experience and while I won't claim
        mastery in all of them, I've fearlessly delved into their realms,
        expanding my skills I'm always looking to learn new things and improve
        my skills.
      </p>

      <Terminal>
        <div className="terminal-window">
          <img src={red} alt="red" title="close" />
          <img src={orange} alt="orange" title="expand" />
          <img src={green} alt="green" title="minimize" />
        </div>
        <p className="terminal__user">
          allanfernandes@portfolio
          <span>~</span>
        </p>
        <TechGrid>
          <div className="tech-grid__item">
            <img src={html} alt="HTML-5" title="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="tech-grid__item">
            <img src={css3} alt="" />
            <p>CSS</p>
          </div>
          <div className="tech-grid__item">
            <img src={javascript} alt="HTML-5" />
            <p>Javascript</p>
          </div>
          <div className="tech-grid__item">
            <img src={react} alt="HTML-5" />
            <p>React</p>
          </div>
          <div className="tech-grid__item">
            <img src={gatsbyIcon} alt="HTML-5" />
            <p>Gatsby</p>
          </div>
          <div className="tech-grid__item">
            <img src={styledIcon} alt="HTML-5" />
            <p>Styled Components</p>
          </div>
          <div className="tech-grid__item">
            <img src={sass} alt="HTML-5" />
            <p>Sass</p>
          </div>
          <div className="tech-grid__item">
            <img src={bootstrap} alt="HTML-5" />
            <p>Bootstrap</p>
          </div>
          <div className="tech-grid__item">
            <img src={githubIcon} alt="HTML-5" />
            <p>Github</p>
          </div>
          <div className="tech-grid__item">
            <img src={wordpress} alt="HTML-5" />
            <p>Wordpress</p>
          </div>
          <div className="tech-grid__item">
            <img src={figma} alt="HTML-5" />
            <p>Figma</p>
          </div>
          <div className="tech-grid__item">
            <img src={firebase} alt="HTML-5" />
            <p>Firebase</p>
          </div>

          <div className="tech-grid__item">
            <img src={sanity} alt="HTML-5" />
            <p>Sanity</p>
          </div>
          <div className="tech-grid__item">
            <img src={jquery} alt="HTML-5" />
            <p>Jquery</p>
          </div>
          <div className="tech-grid__item">
            <img src={netlify} alt="HTML-5" />
            <p>Netlify</p>
          </div>
          <div className="tech-grid__item">
            <img src={sanity} alt="HTML-5" />
            <p>Sanity</p>
          </div>
        </TechGrid>
      </Terminal>
    </SkillsContainer>
  );
}

export default Skills;
