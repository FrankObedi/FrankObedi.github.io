import ProjectCard from "./ProjectCard";
import { ProjectsInfo } from "./ProjectInfo";
import ProjectToggle from "./ProjectToggle";
import PortfolioUIDesigns from "../../Components/PortfolioUIDesigns";
import { useRef, useState } from "react";

export default function Project() {
  const [selected, setSelected] = useState("Bike Shop Manager");
  const cardRef = useRef(null);
  const selectProjectOption = (e) => {
    setSelected(e.target.value);
    cardRef.current?.focus();
  };
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio content">
          <PortfolioUIDesigns />
          <h1 className="porfolio-heading">LATEST PROJECTS</h1>
          <div className="projects-container">
            {/* only render ProjectCard component of selected element */}
            <ProjectToggle
              cardRef={cardRef}
              selected={selected}
              setSelected={setSelected}
              selectProjectOption={selectProjectOption}
            />
            {ProjectsInfo.map((project, index) => {
              if (selected === project.title) {
                return (
                  <ProjectCard
                    cardRef={cardRef}
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    shortDesc={project.shortDesc}
                    longDesc={project.longDesc}
                    buttonText={project.buttonText}
                    link={project.link}
                    linkTarget={project.linkTarget}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
