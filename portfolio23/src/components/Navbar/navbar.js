import React, { useEffect, useState } from 'react';
import { StyledNavbar } from './navbarStyled';

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
      {isMobile
        ? (
          <h2>
            <span>{'<'}</span>
            AllanF
            <span>{'/>'}</span>
          </h2>
        )
        : (
          <h2>
            <span>{'<'}</span>
            AllanFernandes
            <span>{'/>'}</span>
          </h2>
        )}
    </StyledNavbar>
  );
}

export default Navbar;
