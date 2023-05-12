import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProjectsData(data.projects);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/projects");
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map(({ title, description, technologies, completed }) => (
        <div>
          <p>
            <b>Name: </b>
            {title}
          </p>
          <p>
            <b>Description: </b>
            {description}
          </p>
          <button
            onClick={() =>
              setProjectDetails(
                projectsData.filter((item) => item.title === title)
              )
            }
          >
            Show Details
          </button>
        </div>
      ))}
      {projectDetails.map(({ title, description, technologies, completed }) => (
        <div>
          <h2>Project Details</h2>
          <p>
            <b>Name: </b>
            {title}
          </p>
          <p>
            <b>Description: </b>
            {description}
          </p>
          <p>
            <b>Technologies: </b>
            {technologies}
          </p>
          <p>
            <b>Completed: </b>
            {completed ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
}
