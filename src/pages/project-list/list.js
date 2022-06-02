import React from "react";
import { listenerCount } from "process";

function ProjectList({ projectList, users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Leader</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "Unknwon Leader"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
