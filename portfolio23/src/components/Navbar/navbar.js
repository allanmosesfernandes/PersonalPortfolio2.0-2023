import React from 'react';
import { StyledNavbar } from './navbarStyled';

function Navbar() {
  return (
    <StyledNavbar>
      <h2>
        <span>{"<"}</span>
        AllanFernandes
        <span>{"/>"}</span>
      </h2>
    </StyledNavbar>
  );
}

export default Navbar;
