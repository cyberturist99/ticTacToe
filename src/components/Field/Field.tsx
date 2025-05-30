import "./field.css";

interface Props {
	board: (string | null)[];
	index: number;
	handleClick: (index: number) => void;
}

const Field: React.FC<Props> = ({ handleClick, index, board }) => {
	const getTextColor = () => {
		if (board[index] === "X") {
			return { color: "blue" };
		} else if (board[index] === "O") {
			return { color: "green" };
		} else {
			return { color: "inherit" };
		}
	};
	return (
		<div className="field" onClick={() => handleClick(index)}>
			<span style={getTextColor()}>{board[index]}</span>
		</div>
	);
};

export default Field;
