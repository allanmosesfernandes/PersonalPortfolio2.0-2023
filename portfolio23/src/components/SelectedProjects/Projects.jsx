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
      <ProjectsWrapper>
        {/* On hover of Div set state to true  */}
        {/* Convert below to a component */}
        <SingleProject
          ProjectUrl="https://dailystoicreminders.uk/"
          ProjectTitle="Daily Stoic Reminders"
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
          ProjectImage={DailyStoic}
          ProjectDescription="Wesbite design & development."
        />
        <ProjectSingle
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
        >
          {/* Rest of the code */}
          <a
            href="https://dailystoicreminders.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="block__one">
              <p className="block_title">Daily Stoic Reminders</p>
              <p>Wesbite design & development.</p>
            </div>
            <div className="block__two">
              <img src={DailyStoic} alt="Daily Stoic" />
            </div>
            <div className="block__three">
              <Marquee play={blinky}>
                <p>
                  {Array.from({ length: 3 }).map(
                    (_, i) => `Daily Stoic Reminders - `
                  )}
                </p>
              </Marquee>
            </div>
          </a>
        </ProjectSingle>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
