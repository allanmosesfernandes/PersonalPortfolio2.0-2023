import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StyledNavbar, StyledNavbarLinks } from './navbarStyled';
import Button from '../Button/Button';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    handleResize(); // call it initially to initialize the state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledNavbar>
      {isMobile ? (
        <Link to="/">
          <h2>
            AllanF
          </h2>
        </Link>
      ) : (
        <Link to="/">
          <h2>
            <em>allanFernandes</em>
          </h2>
        </Link>
      )}
      <StyledNavbarLinks>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </StyledNavbarLinks>
      <Link to="/blog">
        <Button>Blog</Button>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
