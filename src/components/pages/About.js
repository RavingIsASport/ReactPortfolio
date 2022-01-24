import React from "react";
import picture from "../assets/images/IMG_0691.JPG";
import resume from "../assets/Gustavo_Resume.pdf";

const style = {
  width: {
    width: "20%",
  },
  fontH: {
    color: "#F9ECEB ",
    fontFamily: "monospace",
  },
  fontP: {
    fontSize: "23px",
    color: "#F9ECEB ",
    fontFamily: "monospace",
    fontWeight: "bold",
    background: "rgba(14, 52, 61 ,.8)",
  },
};
export default function About() {
  return (
    <div className="container text-center">
      <img
        src={picture}
        className="img-thumbnail "
        alt="Gustavo Garcia"
        style={style.width}
      ></img>
      <h1 className="display-2" style={style.fontH}>
        About Me
      </h1>
      <p style={style.fontP}>
        Aspiring web developer. Currently enrolled in the SMU Coding Bootcamp. I
        love playing video games and watching sports, mostly soccer. Some of my
        coding skills are Javascript, NodeJS, ReactJS, MongoDB, and Good ol'
        HTML. I currently work in the food industry but I've decided to take a
        different career path, and jump into the programming industry.
      </p>
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
