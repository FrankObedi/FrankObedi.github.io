import { SkillsList } from "./SkillsList";
export default function Skills() {
  return (
    <>
      <div className="skills-window">
        <h3 className="window-heading">SKILLS</h3>
        <div className="skills-grid">
          {SkillsList.map((skill) => {
            return (
              <div className="skill" key={skill.skillName}>
                <h4>
                  <i className={`bx bxl-${skill.skillName.toLowerCase()}`}></i>{" "}
                  {skill.skillName}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
