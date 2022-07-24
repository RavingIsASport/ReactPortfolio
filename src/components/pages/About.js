import React from "react";
import picture from "../assets/images/gustavo.jpeg";
import resume from "../assets/Gustavos_Resume.pdf";
export default function About() {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          src={picture}
          className="max-w-xs rounded-full p-4"
          alt="Gustavo Garcia"
        ></img>
      </div>

      <div className=" w-2/4 mx-auto bg-slate-100/60 rounded-xl mt-8 px-8 py-4 tracking-tight text-center">
        <p className="text-lg font-mono">
          Aspiring web developer. Currently enrolled in the SMU Coding Bootcamp.
          I love playing video games and watching sports, mostly soccer. Some of
          my coding skills are Javascript, NodeJS, ReactJS, MongoDB, and Good
          ol' HTML. I currently work in the food industry but I've decided to
          take a different career path, and jump into the programming industry.
        </p>
        <button
          type="button"
          className="m-3 p-2 bg-cyan-600 hover:bg-cyan-300 hover:text-slate-700 rounded-lg text-slate-200"
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="nav-link active text-reset text-lg font-medium"
            href={resume}
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
