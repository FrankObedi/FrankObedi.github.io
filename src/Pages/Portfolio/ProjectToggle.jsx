import { ProjectsInfo } from "./ProjectInfo";

export default function ProjectToggle({ selected, selectProjectOption }) {
  return (
    <>
      <div className="project-toggle-box">
        {ProjectsInfo.map((project) => {
          return (
            <div className="project-toggle-item " key={project.title}>
              <label
                htmlFor={project.title}
                className={`radio-btn-label ${
                  selected === project.title ? "selected" : "blurred"
                }`}
              >
                <input
                  className="radio-btn"
                  id={project.title}
                  type="radio"
                  name="projects"
                  value={project.title}
                  checked={selected === project.title}
                  onChange={selectProjectOption}
                />
                {project.title}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
