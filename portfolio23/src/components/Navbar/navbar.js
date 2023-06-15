import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { MenuToggle, StyledHamburger, StyledNavbar, StyledNavbarLinks } from "./navbarStyled";
import Button from "../Button/Button";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const toggleHamburgerMenu = () => { setToggleHamburger(!toggleHamburger); };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleInitialLoad = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowHamburger(window.innerWidth <= 768);
    };

    handleInitialLoad();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledNavbar>
      {isMobile ? (
        <>
          <Link to="/">
            <h2></h2>
          </Link>
          {showHamburger && (
            <MenuToggle onClick={toggleHamburgerMenu}>
              <div className={toggleHamburger ? 'hamBox hamBoxOpen' : 'hamBox'}>
                <span
                  className={toggleHamburger ? 'lineTop spin' : 'lineTop'}
                />
                <span
                  className={toggleHamburger ? 'lineBottom spin' : 'lineBottom'}
                />
              </div>
            </MenuToggle>
          )}
        </>
      ) : (
        <>
          <Link to="/">
            <h2></h2>
          </Link>
          <StyledNavbarLinks>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
          </StyledNavbarLinks>
          <Link to="/blog">
            <Button>Blog</Button>
          </Link>
        </>
      )}
      <div
        className="nav-overlay"
        style={{
          top: toggleHamburger ? '0' : '-100%',
          transitionDelay: toggleHamburger ? '0.5s' : '0s',
        }}
      />
    </StyledNavbar>
  );
}

export default Navbar;
