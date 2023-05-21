// import { a } from "react-router-dom";
import { NavItems } from "./NavItems";
import { useState } from "react";

const closeNav = () => {
  setOpenNav(!openNav);
};

export default function NavBar({ scrollToSection, elementRefs }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav className="top-nav">
        <div className="nav-toggle">
          <h1 className="logo">Frank Obedi</h1>
          <i
            className={`bx  ${openNav ? "bx-x" : "bx-menu"}`}
            onClick={() => setOpenNav(!openNav)}
          ></i>
        </div>
        <ul className={openNav ? "mobile-nav" : "nav-links"}>
          {NavItems.map((item, index) => {
            return (
              <li
                key={item.name}
                onClick={() => scrollToSection(elementRefs[index])}
              >
                <a
                  className={item.name === "Home" ? "active-section" : ""}
                  id={item.name + "-link"}
                  onClick={() => setOpenNav(!setOpenNav)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
