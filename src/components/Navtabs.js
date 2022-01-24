import React from "react";

const style = {
  fontName: {
    color: "#F9ECEB ",
    fontFamily: "monospace",
    marginLeft: "10px",
  },
  FontTabs: {
    color: "#62B9CE ",
    fontFamily: "monospace",
    fontSize: "20px",
    marginLeft: "20px",
  },
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navtabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <h2 className="nav-item" style={style.fontName}>
        Gustavo Garcia
      </h2>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          style={style.FontTabs}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
          style={style.FontTabs}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          style={style.FontTabs}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          style={style.FontTabs}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navtabs;
