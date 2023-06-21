import React from 'react';
import { SkillsContainer } from "./skillsStyles";
import Asterik from "../../assets/images/home/asterik.svg";

function Skills() {
  return (
    <SkillsContainer className="wrapper">
      <div className="skills__title">
        <img src={Asterik} alt="Asterik" />
        Skills & Tools
      </div>
      <p>
        <img src={Asterik} alt="Asterik" className='ill'/>
        Programming languages, frameworks, tools & products I've either had
        hands-down experience with or I've worked on and tried out at least once
        and would not call myself a Pro. I'm always looking to learn new things
        and improve my skills.
      </p>
    </SkillsContainer>
  );
}

export default Skills;
