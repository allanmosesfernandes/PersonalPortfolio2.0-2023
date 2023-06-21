import React from 'react';
import styled from 'styled-components';


const StyledOrangeContainer = styled.div`
  display: flex;
`;
function OrangeContainer() {
  return (
    <StyledOrangeContainer>
      <div className="orange__left">
        <div>
          <a href="https://www.linkedin.com/in/rohan-raj-9b1b3b1b0/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="orange__right">
        
      </div>
    </StyledOrangeContainer>
  );
}

export default OrangeContainer;