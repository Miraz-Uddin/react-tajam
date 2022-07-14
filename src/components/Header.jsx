import React, { useEffect, useRef } from "react";
import { Link as NavigationPageLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Header() {
  const navElement = useRef();

  function handleScroll(e) {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 650) {
      document.querySelector(".backToTop").style.display = "none";
      navElement.current.style.backgroundColor = "transparent";
    } else {
      document.querySelector(".backToTop").style.display = "inline-block";
      navElement.current.style.backgroundColor = "#302756";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="full-wrapper header" ref={navElement}>
        <div className="wrapper">
          <div className="logo">
            <NavigationPageLink to="/">
              <img src="assets/images/logo.png" alt="Logo" />
            </NavigationPageLink>
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
                  offset={-72}
                  duration={500}
                >
                  about
                </Link>
                <Link
                  activeClass="active"
                  to="expertise"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  expertise
                </Link>
                <Link
                  activeClass="active"
                  to="teams"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  teams
                </Link>
                <Link
                  activeClass="active"
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  works
                </Link>
                <Link
                  activeClass="active"
                  to="quote"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  people say
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-72}
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
