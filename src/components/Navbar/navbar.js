import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { MenuToggle, StyledHamburgerList, StyledNavbar, StyledNavbarLinks } from "./navbarStyled";
import Button from "../Button/Button";
import plus from "../../assets/images/alt/plus-sign.svg";
import logo from "../../assets/images/home/logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  //when the user scrolls down,add a fixed class to the navbar
  const [navbar, setNavbar] = useState(false);
  //function to change the color of the navbar
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  //function to toggle the hamburger menu
  const toggleHamburgerMenu = () => { setToggleHamburger(!toggleHamburger); };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    //function to handle the initial load
    const handleInitialLoad = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowHamburger(window.innerWidth <= 768);
    };

    handleInitialLoad();
    //add an event listener to the window object
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //add an event listener to the window object
  window.addEventListener("scroll", changeColor);

  return (
    <StyledNavbar className={navbar ? "fixed-navbar" : ""} >
      {isMobile ? (
        <>
          <Link to="/">
            <h2>
              <span>
                <img src={logo} alt="logo" className="logo" />
              </span>
            </h2>
          </Link>
          {showHamburger && (
            <MenuToggle onClick={toggleHamburgerMenu}>
              <div className={toggleHamburger ? "hamBox hamBoxOpen" : "hamBox"}>
                <img
                  className={
                    toggleHamburger ? "hamburger__icon spin" : "hamburger__icon"
                  }
                  src={plus}
                  alt="plus"
                />
              </div>
            </MenuToggle>
          )}
        </>
      ) : (
        <>
          <Link to="/" className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <StyledNavbarLinks>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            {/* <Link to="/contact">contact</Link> */}
          </StyledNavbarLinks>
          <Link to="/blog">
            <Button>Blog</Button>
          </Link>
        </>
      )}
      <div
        className="nav-overlay"
        style={{
          top: toggleHamburger ? "0" : "-100%",
          transitionDelay: toggleHamburger ? "0.5s" : "0s",
        }}>
        <StyledHamburgerList>
          <li className="hamburger__link">
            <Link
              to="/"
              onClick={toggleHamburgerMenu}
              style={{
                top: toggleHamburger ? "0" : "120px",
                transitionDelay: toggleHamburger ? "0.8s" : "0s",
              }}
            >
              Home
            </Link>
            <div className="hamburger__link__wrapper" />
          </li>
          <li className="hamburger__link">
            <Link to="/about" onClick={toggleHamburgerMenu}>
              About
            </Link>
            <div className="hamburger__link__wrapper" />
          </li>
          <li className="hamburger__link">
            <Link to="/projects" onClick={toggleHamburgerMenu}>
              Projects
            </Link>
            <div className="hamburger__link__wrapper" />
          </li>

        </StyledHamburgerList>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
