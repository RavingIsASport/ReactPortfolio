import React, { Component } from "react";
import git from "../assets/images/GitHub-Mark-Light-64px.png";
import linked from "../assets/images/LI-In-Bug.png";

const style = {
  width: {
    width: "120px",
    margin: "20px",
  },
  font: {
    color: "#F9ECEB ",
    fontFamily: "monospace",
  },
};
export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="display-2" style={style.font}>
          You can find me at:
        </h1>
        <a
          href={"https://github.com/RavingIsASport"}
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} className="img" alt="Github" style={style.width} />
        </a>
        <a
          href={"https://www.linkedin.com/in/gustavo-garcia-76b264217/"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linked}
            className="img"
            alt="LinkedIn"
            style={style.width}
          />
        </a>
        <a
          href={"https://www.instagram.com/ravingisasport23/"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            }
            className="img"
            alt="Instagram"
            style={style.width}
          />
        </a>
      </div>
    );
  }
}
