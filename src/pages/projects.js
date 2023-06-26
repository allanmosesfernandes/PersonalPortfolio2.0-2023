import { graphql } from 'gatsby';
import React from 'react';

const Projects = () => {
  return (
    <div>Projects</div>
  );
};


export default Projects;
export const projectsQuery = graphql`
  query ProjectsQuery {
    allSanityProject {
      nodes {
        BuiltWith
        ProjectLink
        Title
        Year
      }
    }
  }
`;