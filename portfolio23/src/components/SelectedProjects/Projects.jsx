import React from 'react';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { ProjectSingle, ProjectsContainer, ProjectsWrapper } from './styledProjects';
import DailyStoic from "../../../src/assets/images/project-images/daily-stoic.png";

function Projects() {
  const [blinky, setBlinky] = useState(false);

  return (
    <ProjectsContainer className="wrapper">
      <div className="projects__title">Some Projects</div>
      <ProjectsWrapper>
        {/* On hover of Div set state to true  */}
        <ProjectSingle
          onMouseEnter={() => setBlinky(true)}
          onMouseLeave={() => setBlinky(false)}
        >
          {/* Rest of the code */}
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="block__one">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                necessitatibus?
              </p>
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
