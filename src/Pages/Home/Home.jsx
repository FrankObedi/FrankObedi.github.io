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
                Hi there, nice to meet you! My name is <span>Frank Obedi</span>.
                I am a student majoring in computer science at Wilfrid Laurier
                University. I am passionate about software engineering,
                front-end and web development. Currently working towards turning
                my passion into a career as a software engineer.
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
              Currently looking for summer 2023 and fall 2023 internship
            </p>
          </div>
          <ImageLoader
            ImageSrc={ProfileImg}
            caption={"Profile Image"}
            ImgSize={"300px"}
          />
          {/* <img className="profile-img" src={ProfileImg} alt="profile image" /> */}
        </div>
        <div className="profile-skills-section">
          <Skills />
          <Courses />
        </div>
      </div>
    </>
  );
}
