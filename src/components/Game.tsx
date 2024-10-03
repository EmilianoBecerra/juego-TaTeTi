import { ReactNode, useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nexthistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nexthistory);
    setCurrentMove(nexthistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves: ReactNode = history.map((square, move) => {
    let description: string;
    if (move > 0) {
      description = "Ir al movimiento " + move;
    } else {
      description = "Ir al inicio del juego";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          movement={currentMove}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        <p className="movement-info">
          {currentMove !== 9
            ? `Jugar el movimiento ${currentMove + 1}`
            : `No hay mas movientos`}
        </p>
      </div>
    </div>
  );
}
