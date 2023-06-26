import { Link, graphql } from 'gatsby';
import React from 'react';
import { ProjectsContainer } from "../components/ProjectsComponent/ProjectStyles";

const Projects = () => {
  return (
    <ProjectsContainer className='wrapper'>
      <Link to='/' className='backLink'>Allan Fernandes</Link>
      <h1>All Projects</h1>
    </ProjectsContainer>
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