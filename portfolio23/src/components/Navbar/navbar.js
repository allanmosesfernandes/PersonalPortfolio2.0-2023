import React from 'react';
import { StyledNavbar } from './navbarStyled';
import Logo from '../../assets/images/home/logo-white.png';

function Navbar() {
  return (
    <StyledNavbar>
      <img src={Logo} alt="Allan Fernandes Logo" />
    </StyledNavbar>
  );
}

export default Navbar;
