import { MouseEventHandler } from "react";
import "./Square.css";

export default function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: MouseEventHandler;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
