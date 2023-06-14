import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--base-orange);
  color: var(--base-black);
  font-size: 1.5rem;
  width: 100%;
  padding: 1rem;
`;
// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <StyledButton type="button">
      {children}
    </StyledButton>
  );
}

export default Button;
