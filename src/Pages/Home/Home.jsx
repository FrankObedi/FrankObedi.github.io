import React from "react";
import ProfileImg from "../../../src/assets/images/ProfileImg3.png";
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
                Hi, I'm <span>Frank Obedi</span>, I’m a software engineer specializing in test automation, 
                with experience building automation frameworks using tools such as Selenium WebDriver, Cucumber (BDD), 
                RestAssured, Postman, and Jenkins. I’m passionate about improving product quality,
                streamlining CI/CD pipelines, and collaborating with development teams to deliver fast, stable releases.
              </p>
              <div className="links">
                <a
                  href="/files/Frank_Obedi_Resume.pdf"
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
              Building future payments technologies
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
