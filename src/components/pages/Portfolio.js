import React, { Component } from "react";
import mad from "../assets/images/Screen Shot 2022-01-12 at 2.57.07 PM.png";
import pass from "../assets/images/Screen Shot 2022-01-12 at 3.35.51 PM.png";
import naughtyBy from "../assets/images/Screen Shot 2022-01-12 at 3.22.32 PM.png";
const styles = {
  font: {
    fontFamily: "monospace",
    color: "snow",
  },
  width: {
    width: "18rem",
  },
};
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center" style={styles.font}>
          My work
        </h1>
        <br />
        <div className="container text-center row row-cols-4 row-cols-md-3 g-4">
          <div className="col">
            <div className="card" style={styles.width}>
              <img src={mad} className="card-img-top" alt="Mad-Quick-Stats" />
              <div className="card-body">
                <h5 className="card-title">Mad Quick Stats</h5>
                <p className="card-text">
                  Mad Quick Stats is an application that gives you statistics
                  for your choice of team of either, the NBA or NHL. This was
                  built by Neil Juanillo, Andrew Tran, Zaid Mahrouq, and Myself.
                </p>
                <a
                  href="https://ravingisasport.github.io/Mad-Quick-Stats/"
                  className="btn btn-primary"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={styles.width}>
              <img
                src={naughtyBy}
                className="card-img-top"
                alt="Mad-Quick-Stats"
              />
              <div className="card-body">
                <h5 className="card-title">Naughty By Nature</h5>
                <p className="card-text">
                  Naughty by Nature brings you a better way to show off any
                  animals or plants you would like to share with friends and
                  family. This was built by Konner Hartman, Corbin Ball, Wanda
                  Avery, and myself
                </p>
                <a
                  href="https://naughty-by-nature.herokuapp.com/"
                  className="btn btn-primary"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={styles.width}>
              <img src={pass} className="card-img-top" alt="Mad-Quick-Stats" />
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  Generates a tough password for you that no one will ever be
                  able to guess. Give it a try. Just answer a few questions and
                  hit the generate button and you should get your unique
                  password.
                </p>
                <a
                  href="https://ravingisasport.github.io/Password_Generator/"
                  className="btn btn-primary"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
