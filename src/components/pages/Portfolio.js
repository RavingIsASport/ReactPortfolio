import React, { Component } from "react";
import mad from "../assets/images/MadQuickStats.png";
import pass from "../assets/images/PasswordGenerator.png";
import naughtyBy from "../assets/images/NaughtyByNature.png";
import weatherApp from "../assets/images/WeatherApp.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <div className="flex justify-center my-8">
          <h1 className="text-5xl font-mono">My Work</h1>
        </div>
        {/* columns */}
        {/* project 1 */}
        <div className="grid grid-cols-2">
          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white/70 max-w-xl">
              <img className="rounded-t-lg" src={mad} alt="Mad Quick Stats" />

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Mad Quick Stats
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Mad Quick Stats is an application that gives you statistics
                  for your choice of team of either, the NBA or NHL. This was
                  built by Neil Juanillo, Andrew Tran, Zaid Mahrouq, and Myself.
                </p>

                <a
                  href="https://ravingisasport.github.io/Mad-Quick-Stats/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-300 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white/70 max-w-xl">
              <img
                className="rounded-t-lg"
                src={naughtyBy}
                alt="Naughty By Nature"
              />

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Naughty By Nature
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Naughty by Nature brings you a better way to show off any
                  animals or plants you would like to share with friends and
                  family. This was built by Konner Hartman, Corbin Ball, Wanda
                  Avery, and myself
                </p>

                <a
                  href="https://naughty-by-nature.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-300 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project 3 */}
          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white/70 max-w-xl">
              <img
                className="rounded-t-lg"
                src={pass}
                alt="Password Generator"
              />

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Password Generator
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Generates a tough password for you that no one will ever be
                  able to guess. Give it a try. Just answer a few questions and
                  hit the generate button and you should get your unique
                  password.
                </p>

                <a
                  href="https://ravingisasport.github.io/Password_Generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-300 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project 4 */}
          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white/70 max-w-xl">
              <img
                className="rounded-t-lg"
                src={weatherApp}
                alt="Weather App"
              />

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Weather App
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Naughty by Nature brings you a better way to show off any
                  animals or plants you would like to share with friends and
                  family. This was built by Konner Hartman, Corbin Ball, Wanda
                  Avery, and myself
                </p>

                <a
                  href="https://ravingisasport.github.io/WeatherApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-300 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* end of cols*/}
        </div>
      </div>
    );
  }
}
