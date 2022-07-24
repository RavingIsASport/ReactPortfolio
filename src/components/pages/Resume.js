import React, { Component } from "react";
import resume from "../assets/Gustavos_Resume.pdf";
export default class Resume extends Component {
  render() {
    return (
      <div>
        <p></p>
        <button type="button" className="btn btn-primary btn-lg">
          <a
            target="_blank"
            rel="noreferrer"
            className="nav-link active text-reset"
            href={resume}
          >
            Resume
          </a>
        </button>
      </div>
    );
  }
}
