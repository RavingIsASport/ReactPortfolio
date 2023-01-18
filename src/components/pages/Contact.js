import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <h1 className="text-xl my-5">You can find me at:</h1>
        </div>
        <div className="flex justify-center gap-10">
          <div className="max-w-auto">
            <a
              href={"https://github.com/RavingIsASport"}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github-square text-9xl"></i>
            </a>
          </div>

          <div className="max-w-xs">
            <a
              href={"https://www.linkedin.com/in/gustavo-garcia-76b264217/"}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-9xl"></i>
            </a>
          </div>
          <div>
            <a
              href={"https://www.instagram.com/ravingisasport23/"}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram text-9xl"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
