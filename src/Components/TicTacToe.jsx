import React, { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import Game from "./GameState";
import Reset from "./Reset";

const player_x = "X";
const player_o = "O";
const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combo, strikeClass } of winningCombinations) {
    const value1 = tiles[combo[0]];
    const value2 = tiles[combo[1]];
    const value3 = tiles[combo[2]];

    if (value1 !== null && value1 === value2 && value1 === value3) {
      setStrikeClass(strikeClass);
      setGameState(value1===player_x ? Game.playerXWins:Game.playerOWins);
      // if (value1 === player_o) {
      //   setGameState(Game.playerOWins);
      // } else {
      //   setGameState(Game.playerXWins);
      // }
      return;
    }
  }

  const AllTilesFilled = tiles.every((tile) => {
    return tile !== null;
    
  });
  if (AllTilesFilled){
    setGameState(Game.draw);
  }
};

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_x);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(Game.inProgress);

  const handleTileClick = (ind) => {
    if(gameState!==Game.inProgress) return;
    if (tiles[ind] !== null) {
      return;
    }
    const newTile = [...tiles];
    if (playerTurn === player_x) {
      newTile[ind] = player_x;
      setPlayerTurn(player_o);
      setTiles(newTile);
    } else {
      newTile[ind] = player_o;
      setPlayerTurn(player_x);
      setTiles(newTile);
    }
  };

  const onReset=()=>{
    setGameState(Game.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(player_x);
    setStrikeClass(null);
  }

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  return (
    <div>
      <h1>TicTacToe</h1>
      <Board
        tiles={tiles}
        handleTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={onReset}/>
    </div>
  );
};

export default TicTacToe;
