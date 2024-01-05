import React from "react";
import "./TicTacToe.css";
import circle_icon from "../assets/circle_icon.png";
import cross_icon from "../assets/cross_icon.png";

const TicTacToe = () => {
  return (
    <div classname="container">
      <h1 className="title">TicTacToe Game in <span>React</span></h1>
      <div className="board">

      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTacToe