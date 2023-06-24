import React from "react";
import { Terminal } from "../Skills/skillsStyles";
import red from "../../assets/images/skills/buttons/red.svg";
import orange from "../../assets/images/skills/buttons/orange.svg";
import green from "../../assets/images/skills/buttons/green.svg";
import Typewriter from "typewriter-effect";

const BashTerminal = () => {
  return (
    <Terminal className="whiteTerminal">
      <div className="terminal-window">
        <img src={red} alt="red" title="close" />
        <img src={orange} alt="orange" title="expand" />
        <img src={green} alt="green" title="minimize" />
      </div>
      <p className="terminal__user">
        allanfernandes@portfolio
        <span>~</span>
      </p>
      <p>
        {" "}
        <Typewriter
          options={{
            strings: [
              "$ mkdir <em>cool__project</em><br>$ cd cool__project/ <br>$ npm init -y",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </Terminal>
  );
};

export default BashTerminal;