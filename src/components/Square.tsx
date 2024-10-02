import "./Square.css";

export default function Square({ value, onSquareClick }: {value:string, onSquareClick:VoidFunction}) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}
