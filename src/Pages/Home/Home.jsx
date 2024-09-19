import React from "react";
import ProfileImg from "../../../src/assets/images/ProfileImg.png";
// import { a } from "react-router-dom";
import Skills from "./Skills";
import Courses from "./Courses";
import ImageLoader from "../Portfolio/ImageLoader";

export default function Profile() {
  return (
    <>
      <div className="profile-container content" id="portfolio">
        <h1 className="main-heading">ABOUT ME</h1>
        <div className="profile">
          <div className="profile-info">
            <div className="about-paragraph">
              <p>
                Hi, I'm <span>Frank Obedi</span>, an aspiring full-stack
                developer and 4th year Computer Science student at WLU. I
                recently graduated from the Production Engineering fellowship at
                MLH and Meta where I sharpened my skills in building scalable
                and reliable systems. I've also worked as a web development
                intern at North York Arts, creating digital solutions to support
                local arts initiatives.
              </p>
              <div className="links">
                <a
                  href="/files/FrankSoftwareResume.pdf"
                  className="cv-btn"
                  target="_blank"
                  download
                >
                  Download CV
                </a>
                <a
                  href="https://www.linkedin.com/in/frank-obedi-573421251/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square"></i> LinkedIn
                </a>
                <a href="https://github.com/FrankObedi" target="_blank">
                  <i className="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="status-window">
            <p>
              <span>Location: </span>
              <br />
              Toronto, Canada
            </p>
            <p>
              <span>Status: </span>
              <br />
              Currently looking for winter/summer 2025 internships
            </p>
          </div>
          <ImageLoader
            ImageSrc={ProfileImg}
            caption={"Profile Image"}
            ImgSize={"300px"}
          />
        </div>
        <div className="profile-skills-section">
          <Skills />
          <Courses />
        </div>
      </div>
    </>
  );
}
