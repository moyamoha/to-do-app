import React from "react";
import { Link } from "react-router-dom";

export default function CompletedTodo({ todo }) {
	return (
		<Link
			to={`/${todo._id}`}
			className="list-group-item list-group-item-action list-group-item-success"
		>
			<b>{todo.title}</b> - Completed at{" "}
			{new Date(todo.dateCompleted).toLocaleString("fi")}
		</Link>
	);
}
