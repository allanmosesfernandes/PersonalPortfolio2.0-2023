import React from 'react';
import { SkillsContainer, TechGrid } from "./skillsStyles";
import Asterik from "../../assets/images/home/asterik.svg";

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
        hands-down experience with or I've worked on and tried out at least once
        and would not call myself a Pro. I'm always looking to learn new things
        and improve my skills.
      </p>
      <TechGrid>
        <div class="terminal-panel">
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF605C"
            width="10"
            height="10"
          >
            <path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0"></path>
            <path d="m384 256c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0"></path>
            <title>close</title>
          </svg>
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFBD44"
            width="10"
            height="10"
          >
            <path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0"></path>
            <path d="m384 256c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0"></path>
            <title>minimise</title>
          </svg>
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#00CA4E"
            width="10"
            height="10"
          >
            <path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0"></path>
            <path d="m384 256c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0"></path>
            <title>maximize </title>
          </svg>
        </div>
        <div className="tech-grid__item">
          <img />
        </div>
        <div className="tech-grid__item">
          <img />
        </div>
        <div className="tech-grid__item">
          <img />
        </div>
        <div className="tech-grid__item">
          <img />
        </div>
        <div className="tech-grid__item">
          <img />
        </div>
      </TechGrid>
    </SkillsContainer>
  );
}

export default Skills;
