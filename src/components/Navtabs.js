import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navtabs({ currentPage, handlePageChange }) {
  return (
    <nav className=" md:w-3/4 mx-auto md:flex justify-between rounded-xl bg-emerald-50/80 p-6">
      <h2 className="text-2xl md:text-3xl text-center font-mono mb-5 md:mb-0">
        Gustavo Garcia
      </h2>
      <div>
        <ul className="flex justify-center md:text-xl font-mono gap-6 md:gap-8 md:pr-3">
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className="bg-emerald-600 p-2 rounded-lg cursor-pointer text-slate-100 hover:bg-emerald-400 hover:text-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="bg-emerald-600 p-2 rounded-lg cursor-pointer text-slate-100  hover:bg-emerald-400 hover:text-black"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="bg-emerald-600 p-2 rounded-lg cursor-pointer text-slate-100  hover:bg-emerald-400 hover:text-black"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navtabs;
