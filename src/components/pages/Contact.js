import React, { Component } from "react";
import git from "../assets/images/GitHub-Mark-Light-64px.png";
import linked from "../assets/images/LI-In-Bug.png";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-xl my-5">You can find me at:</h1>
        </div>
        <div className="flex justify-center">
          <div className="max-w-auto">
            <a
              href={"https://github.com/RavingIsASport"}
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} className="img" alt="Github" />
            </a>
          </div>

          <div className="max-w-xs">
            <a
              href={"https://www.linkedin.com/in/gustavo-garcia-76b264217/"}
              target="_blank"
              rel="noreferrer"
            >
              <img src={linked} className="max-w-xs" alt="LinkedIn" />
            </a>
          </div>
          <div>
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
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
