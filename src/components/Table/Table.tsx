import Field from "../Field/Field";
import "./Table.css";
import { useState } from "react";

export default function Table() {
	const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

	return (
		<div className="wrapper">
			{board.map((_, index) => {
				return <Field key={index} />;
			})}
		</div>
	);
}
