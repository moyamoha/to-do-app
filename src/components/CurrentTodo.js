import React from "react";
import { Link } from "react-router-dom";

export default function CurrentTodo({ todo }) {
	return (
		<Link
			to={`/${todo._id}`}
			className={`list-group-item list-group-item-action ${
				todo.important ? "list-group-item-danger" : "list-group-item-info"
			}`}
		>
			<b>{todo.title}</b>- {todo.description}
		</Link>
	);
}
