import React from 'react';
import { ProjectSingle, ProjectsContainer, ProjectsWrapper } from './styledProjects';
import DailyStoic from "../../../src/assets/images/project-images/daily-stoic.png";

function Projects() {
  return (
    <ProjectsContainer className='wrapper'>
      <div className="projects__title">Some Projects</div>
      <ProjectsWrapper>
        <ProjectSingle>
          <div className="block__one">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, necessitatibus?
            </p>
          </div>
          <div className="block__two">
            <img src={DailyStoic} alt="Daily Stoic" />
          </div>
          <div className="block__three">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, necessitatibus?
            </p>
          </div>
        </ProjectSingle>
      </ProjectsWrapper>
    </ProjectsContainer>

  );
}

export default Projects;
