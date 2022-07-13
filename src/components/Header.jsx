import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <div className="full-wrapper header">
        <div className="wrapper">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="banner"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  home
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  about
                </Link>
                <Link
                  activeClass="active"
                  to="expertise"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  expertise
                </Link>
                <Link
                  activeClass="active"
                  to="teams"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  teams
                </Link>
                <Link
                  activeClass="active"
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  works
                </Link>
                <Link
                  activeClass="active"
                  to="quote"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  people say
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </>
  );
}
