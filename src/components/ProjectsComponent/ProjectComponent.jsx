import React from 'react';

const ProjectComponent = ({ data }) => {
  console.log(data);
  return (
    <table className='project__table'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Project</th>
          <th>Built with</th>
          <th width="30%">Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => {
          let year = project.Year.split("-")[0];
          let url = project.ProjectLink;
          let extractedURL = url.substring(url.indexOf("https://") + 8, url.indexOf("/", 8)); //extracting the domain name from the url
          return (
            <tr key={index}>
              <td>{year}</td>
              <td>{project.Title}</td>
              <td>
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
    </table>
  );
};

export default ProjectComponent;