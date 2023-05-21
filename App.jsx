import { useRef, useState, useEffect } from "react";
import NavBar from "./src/Components/NavBar";
import Projects from "./src/Pages/Portfolio/Projects";
import ContactForm from "./src/Pages/Contact/ContactForm";
import Profile from "./src/Pages/Home/Home";
import UIDesingElements from "./src/Components/UIDesingElements";
import ProfileUIDesigns from "./src/Components/ProfileUIDesigns";

function App() {
  const Home = useRef(null);
  const Portfolio = useRef(null);
  const Contact = useRef(null);
  const Content = useRef(null);
  const elementRefs = [Home, Portfolio, Contact];

  // scroll to section when nav link is clicked
  // set the link to active as well
  const scrollToSection = (elementRef) => {
    let offset = elementRef.current.offsetTop;
    Content.current.scrollTop = offset - 45;
  };

  const addActiveClass = (links, elementId) => {
    links.forEach((link) => {
      link.classList.remove("active-section");
      if (link.id === elementId) {
        link.classList.add("active-section");
      }
    });
  };

  // change color of active nav link on mouse-wheel will scroll
  const handleScroll = (e) => {
    const links = document.querySelectorAll("nav ul li a");
    elementRefs.forEach((sec) => {
      let winTop = e.currentTarget.scrollTop;
      let secOffset = sec.current.offsetTop / 1.2;
      let secHeight = sec.current.offsetHeight;
      let secId = sec.current.id + "-link";
      if (winTop >= secOffset && winTop < secOffset + secHeight) {
        addActiveClass(links, secId);
      }
    });
  };

  return (
    <>
      <main ref={Content} className="main-page" onScroll={handleScroll}>
        <header className="nav-container">
          <NavBar scrollToSection={scrollToSection} elementRefs={elementRefs} />
        </header>
        <UIDesingElements />
        <div className="content-wrapper">
          <div className="content-container">
            <section ref={Home} className="home-section" id="Home">
              <div className="home-content">
                <ProfileUIDesigns />
                <Profile />
              </div>
            </section>

            <section
              ref={Portfolio}
              className="portfolio-section"
              id="Portfolio"
            >
              <Projects />
            </section>

            <section
              ref={Contact}
              className="contact-form-section"
              id="Contact"
            >
              <ContactForm />
            </section>

            <footer className="footer-section">
              <p>&copy; 2023 Frank Obedi. All Rights Reserved.</p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
