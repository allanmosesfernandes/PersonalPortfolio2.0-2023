import React from 'react';

const ProjectComponent = ({ data }) => {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Project</th>
          <th>Built with</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project,index) => (
          <tr key={index}>
            <td>{project.Year}</td>
            <td>{project.Title}</td>
            <td>{project.builtWith}</td>
            <td>{project.ProjectLink}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectComponent;