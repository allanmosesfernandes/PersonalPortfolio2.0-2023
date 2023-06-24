import React from "react";
import { Terminal } from "../Skills/skillsStyles";
import red from "../../assets/images/skills/buttons/red.svg";
import orange from "../../assets/images/skills/buttons/orange.svg";
import green from "../../assets/images/skills/buttons/green.svg";

const BashTerminal = () => {
  return (
    <Terminal>
      <div className="terminal-window">
        <img src={red} alt="red" title="close" />
        <img src={orange} alt="orange" title="expand" />
        <img src={green} alt="green" title="minimize" />
      </div>
      <p className="terminal__user">
        allanfernandes@portfolio
        <span>~</span>
      </p>

    </Terminal>
  );
};

export default BashTerminal;