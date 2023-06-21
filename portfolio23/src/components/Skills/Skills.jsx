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
    </SkillsContainer>
  );
}

export default Skills;
