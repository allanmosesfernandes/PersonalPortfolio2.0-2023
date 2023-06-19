import React from 'react';
import { FirstFoldContainer, FlightPath } from './FirstFoldStyles';
import nerd from '../../assets/images/home/nerd.png';
import Flight from "../../assets/images/home/flight.svg";

function FirstFold() {
  return (
    <FirstFoldContainer className="wrapper">
      <div className="firstFold__left">
        <FlightPath>
          <p className="flight-path__origin">BOM</p>
          <div className="flight-path__line">
            <img src={Flight} alt="Flight" />
          </div>
          <p className="flight-path__origin">LHR</p>
        </FlightPath>
        <div className="body-copy">
          <p>
            My name is Allan, a front-end developer based in Nottingham UK.
          </p>
        </div>
      </div>
      <div className="firstFold__right">
        <div className="window-pane" />
        <img src={nerd} alt="nerd" />
      </div>
    </FirstFoldContainer>
  );
}

export default FirstFold;
