import React from 'react';
import { useState } from 'react';
import { ProjectSingle } from "./styledProjects";
import Marquee from 'react-fast-marquee';

function SingleProject(props) {
  const [blinky, setBlinky] = useState(false);
  const {
    ProjectUrl,
    ProjectTitle,
    onMouseEnter,
    onMouseLeave,
    ProjectDescription,
    ProjectImage,
  } = props;
  return (
    <ProjectSingle
      onMouseEnter={() => setBlinky(true)}
      onMouseLeave={() => setBlinky(false)}
    >
      {/* Rest of the code */}
      <a href={ProjectUrl} target="_blank" rel="noopener noreferrer">
        <div className="block__one">
          <p className="block_title">{ProjectTitle}</p>
          <p>{ProjectDescription}</p>
        </div>
        <div className="block__two">
          <img src={ProjectImage} alt="Daily Stoic" />
        </div>
        <div className="block__three">
          <Marquee play={blinky}>
            <p>
              {Array.from({ length: 3 }).map((_, i) => `${ProjectTitle} - `)}
            </p>
          </Marquee>
        </div>
      </a>
    </ProjectSingle>
  );
}

export default SingleProject;
