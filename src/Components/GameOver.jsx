import React from "react";
import Game from "./GameState";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case Game.inProgress:
      return <></>;
    case Game.playerXWins:
      return <div className="game-over">Player X wins</div>;
    case Game.playerOWins:
      return <div className="game-over">Player O wins</div>;
    case Game.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
};

export default GameOver;
