import React from 'react';
import { FirstFoldContainer } from './FirstFoldStyles';
import nerd from '../../assets/images/home/nerd.png';

function FirstFold() {
  return (
    <FirstFoldContainer className="wrapper">
      <div className="firstFold__left">
        <h2>hi</h2>
      </div>
      <div className="firstFold__right">
        <div className="window-pane" />
        <img src={nerd} alt="nerd" />
      </div>
    </FirstFoldContainer>
  );
}

export default FirstFold;
