import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  // const [winner, setWinner] = useState(false);
  
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] == state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner()


  const onSquareClick = (index) => {
    if (state[index]) return;
    if (isWinner) return
    
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";

    setState(copyState);
    setXturn(!isXturn);
  };

  return (
    <>
    <h1>Tic Tac Toe Game</h1>
    <div className="flex-row px-24 py-8 items-center Board-container ">
      <div className="board-row flex">
        <Square onClick={() => onSquareClick(0)} value={state[0]} />
        <Square onClick={() => onSquareClick(1)} value={state[1]} />
        <Square onClick={() => onSquareClick(2)} value={state[2]} />
      </div>
      <div className="board-row flex">
        <Square onClick={() => onSquareClick(3)} value={state[3]} />
        <Square onClick={() => onSquareClick(4)} value={state[4]} />
        <Square onClick={() => onSquareClick(5)} value={state[5]} />
      </div>
      <div className="board-row flex ">
        <Square onClick={() => onSquareClick(6)} value={state[6]} />
        <Square onClick={() => onSquareClick(7)} value={state[7]} />
        <Square onClick={() => onSquareClick(8)} value={state[8]} />
      </div>
      {isWinner?<div className="m-2 flex text-center justify-center border rounded text-blue-400">{isWinner} won the game</div>:<></>}
    </div>
    </>
  );
};

export default Board;
