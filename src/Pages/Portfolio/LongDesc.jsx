import ProjectCard from "./ProjectCard";

export default function LongDesc({
  projectTitle,
  description,
  showLongDesc,
  setLongDesc,
}) {
  return (
    <div
      className="long-desc-wrapper"
      onClick={() => setLongDesc(!showLongDesc)}
    >
      <div className="long-desc-container">
        <div className="long-desc-header">
          <h3 className="heading">{projectTitle}</h3>
          <button
            className="close-descBtn"
            onClick={() => setLongDesc(!showLongDesc)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="long-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
