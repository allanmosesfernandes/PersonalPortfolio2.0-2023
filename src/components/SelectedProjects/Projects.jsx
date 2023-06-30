import React from 'react';
import { useState } from 'react';
import {
  ProjectsContainer,
  ProjectsWrapper,
} from "./styledProjects";
import DailyStoic from "../../../src/assets/images/project-images/1.png";
import ankan from "../../../src/assets/images/project-images/2.png";
import apex from "../../../src/assets/images/project-images/3.png";                                  
import trent from "../../../src/assets/images/project-images/fresh.png";
import SingleProject from './SingleProject';

function Projects() {
  const [blinky, setBlinky] = useState(false);

  return (
    <ProjectsContainer className="wrapper">
      <div className="projects__title">Few of my Projects</div>
      <ProjectsWrapper>
        <SingleProject
          ProjectUrl="https://dailystoicreminders.uk/"
          ProjectTitle="Daily Stoic Reminders"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={DailyStoic}
          //how do I add a linebreak here?
          ProjectDescription="Conceptualized, designed & developed a web app for daily stoic reminders using React."
        />
        <SingleProject
          ProjectUrl="https://ankanchittalipi.com/"
          ProjectTitle="The Common Thread"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={ankan}
          ProjectDescription="Website design & development for @ankanchittalipi, using wordpress as a headless CMS with a react frontend."
        />
        <SingleProject
          ProjectUrl="http://trentfreshers.org/"
          ProjectTitle="Trent Freshers "
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={trent}
          ProjectDescription="Website design development for @trentsu using wordpress."
        />
        <SingleProject
          ProjectUrl="https://apexlearningacademy.co.in/"
          ProjectTitle="Apex Learning Academy"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={apex}
          ProjectDescription="Website design & development for @apexacademy using React."
        />
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
