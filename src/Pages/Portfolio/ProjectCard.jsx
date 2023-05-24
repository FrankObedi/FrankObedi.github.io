import { useRef, useState } from "react";
import LongDesc from "./LongDesc";
import ImageLoader from "./ImageLoader";
import VideoLoader from "./VideoLoader";
export default function ProjectCard({
  image,
  title,
  shortDesc,
  longDesc,
  buttonText,
  link,
  linkTarget,
  cardRef,
  isVideo,
}) {
  const [showLongDesc, setLongDesc] = useState(false);
  function HandleClick(e) {
    if (e.currentTarget.innerText === "Read More") {
      e.preventDefault;
      setLongDesc(!showLongDesc);
    }
  }

  return (
    <>
      <div className="project-card" ref={cardRef}>
        {showLongDesc ? (
          <LongDesc
            projectTitle={title}
            description={longDesc}
            showLongDesc={showLongDesc}
            setLongDesc={setLongDesc}
          />
        ) : (
          ""
        )}

        {/* <img className="ProjectCardImg" src={image} alt={title} /> */}
        <div className="project-info">
          <h4 className="window-heading">{title}</h4>
          <div className="project-desc">
            <p>{shortDesc}</p>
            <a
              className="project-card-btn"
              href={link}
              target={linkTarget}
              onClick={(e) => HandleClick(e)}
            >
              {buttonText}
            </a>
          </div>
        </div>

        {isVideo ? (
          <VideoLoader />
        ) : (
          <ImageLoader
            className={"project-card-img"}
            ImageSrc={image}
            caption={title}
            ImgSize={"150px"}
          />
        )}
      </div>
    </>
  );
}
