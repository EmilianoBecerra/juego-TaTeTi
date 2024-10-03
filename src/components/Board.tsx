import calculateWinner from "../utils";
import "./Board.css";
import Square from "./Square";

export default function Board({
  xIsNext,
  squares,
  onPlay,
  movement,
}: {
  xIsNext: boolean;
  squares: string[];
  onPlay: (param: string[]) => void;
  movement: number;
}) {
  let status: string;
  const winner: string | null = calculateWinner(squares);

  if (movement === 9 && !winner) {
    status = "Empate";
  } else if (winner) {
    status = status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }


  function handleClick(i: number): VoidFunction | undefined {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquaresArr: string[] = squares.slice();
    if (xIsNext) {
      newSquaresArr[i] = "X";
    } else {
      newSquaresArr[i] = "O";
    }
    onPlay(newSquaresArr);
  }

  return (
    <div className="grid">
      <div className={status.includes("Ganador") ? "status-win" : "status"}>
        {status}
      </div>
      <div className="board-row">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              value={square}
              onSquareClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
