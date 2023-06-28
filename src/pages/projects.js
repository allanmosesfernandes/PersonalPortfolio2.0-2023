import { Link, graphql } from 'gatsby';
import React from 'react';
import { ProjectsContainer } from "../components/ProjectsComponent/ProjectStyles";
import ProjectComponent from "../components/ProjectsComponent/ProjectComponent";

const Projects = ({ data }) => {
  // const ProjectData = data.allSanityProject.nodes;
  return (
    <ProjectsContainer className='wrapper'>
      <Link to='/' className='backLink'>Allan Fernandes</Link>
      <h1>All Projects</h1>
      {/* <ProjectComponent data = { ProjectData }/> */}

                
    </ProjectsContainer>
  );
};


export default Projects;
// export const projectsQuery = graphql`
//   query ProjectsQuery {
//     allSanityProject(sort: { Year: DESC }) {
//       nodes {
//         BuiltWith
//         ProjectLink
//         Title
//         Year
//       }
//     }
//   }
// `;
//   query ProjectsQuery {
//     allSanityProject(sort: { Year: DESC }) {
//       nodes {
//         BuiltWith
//         ProjectLink
//         Title
//         Year
//       }
//     }
//   }
// `;
