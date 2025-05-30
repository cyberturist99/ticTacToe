import Field from "../Field/Field";
import "./Table.css";
import { useState } from "react";

export default function Table() {
	const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
	const [player, setPlayer] = useState("X");

	function resetGame() {
		setPlayer("X");
		setBoard(Array(9).fill(null));
	}

	function handleClick(index: number) {
		if (board[index] === null) {
			const newBoard = [...board];
			newBoard[index] = player;
			setBoard(newBoard);
			setPlayer(player === "X" ? "O" : "X");
		}
	}

	return (
		<>
			<div className="wrapper">
				{board.map((_, index) => {
					return <Field key={index} index={index} handleClick={handleClick} board={board} />;
				})}
			</div>
			<button className="resetBtn" onClick={resetGame}>
				Заново
			</button>
		</>
	);
}
