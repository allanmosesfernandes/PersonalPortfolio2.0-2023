import React from 'react';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import {
  ProjectSingle,
  ProjectsContainer,
  ProjectsWrapper,
} from "./styledProjects";
import DailyStoic from "../../../src/assets/images/project-images/daily-stoic.png";
import SingleProject from './SingleProject';

function Projects() {
  const [blinky, setBlinky] = useState(false);

  return (
    <ProjectsContainer className="wrapper">
      <div className="projects__title">Some Projects</div>
      <SingleProject
        ProjectUrl="https://dailystoicreminders.uk/"
        ProjectTitle="Daily Stoic Reminders"
        onMouseEnter={() => setBlinky(true)}
        onMouseLeave={() => setBlinky(false)}
        ProjectImage={DailyStoic}
        ProjectDescription="Website design & development."
      />
      <SingleProject
        ProjectUrl="https://dailystoicreminders.uk/"
        ProjectTitle="Daily Stoic Reminders"
        onMouseEnter={() => setBlinky(true)}
        onMouseLeave={() => setBlinky(false)}
        ProjectImage={DailyStoic}
        ProjectDescription="Website design & development."
      />
    </ProjectsContainer>
  );
}

export default Projects;
