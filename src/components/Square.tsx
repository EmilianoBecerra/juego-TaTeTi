import "./Square.css";

export default function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: ()=>void ;
}) {
  return (
    <button
      className={value === "X" ? "square x" : "square o"}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
