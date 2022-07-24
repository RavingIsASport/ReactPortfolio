import React, { Component } from "react";
const style = {
  font: {
    color: "white",
    fontSize: "20px",
  },
};
export default class Footer extends Component {
  render() {
    return (
      <footer className="w-full mt-auto flex justify-center ">
        <span style={style.font}>Made By Gustavo Garcia 😎 </span>
      </footer>
    );
  }
}
