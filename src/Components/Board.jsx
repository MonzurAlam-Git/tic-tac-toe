import React from "react";

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white h-12 w-12 border border-gray-500 leading-9 m-1 text-lg font-bold"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [square, setSquare] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const handleSquareClick = (i) => {
    const newSquare = square.slice();

    if (square[i] || checkWinner(square)) {
      return;
    }
    if (xIsNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }

    setSquare(newSquare);
    setXIsNext(!xIsNext);
  };

  const winner = checkWinner(square);
  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next Player ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400  rounded-xl w-max p-[20px] my-5 mx-auto">
      <h1 className="text-white text-center p-2 font-bold">{status}</h1>
      <div className="flex">
        <Square value={square[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="flex">
        <Square value={square[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="flex">
        <Square value={square[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </div>
  );
}

function checkWinner(square) {
  const winningLines = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
