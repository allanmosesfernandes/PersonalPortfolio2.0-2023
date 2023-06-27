import React from 'react';
import { ProjectTable } from "./ProjectStyles";

const ProjectComponent = ({ data }) => {
  console.log(data);
  return (
    <ProjectTable>
      <thead>
        <tr>
          <th>Year</th>
          <th className="mobile__hide">Project</th>
          <th className="mobile__hide">Built with</th>
          <th width="w-30">Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => {
          let year = project.Year.split("-")[0];
          let url = project.ProjectLink;
          let extractedURL = url.substring(
            url.indexOf("https://") + 8,
            url.indexOf("/", 8)
          ); //extracting the domain name from the url
          return (
            <tr key={index}>
              <td>{year}</td>
              <td className="mobile__hide">{project.Title}</td>
              <td className="mobile__hide">
                {project.BuiltWith.map((item, index) => {
                  return (
                    <div key={index} className="built__with">
                      {item}
                    </div>
                  );
                })}
              </td>
              <td>
                <a className="project__link" href={project.ProjectLink}>
                  {extractedURL}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </ProjectTable>
  );
};

export default ProjectComponent;