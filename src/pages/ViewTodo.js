import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BaseLayout from "../components/BaseLayout";
import TodoEditForm from "../components/TodoEditForm";

export default function ViewTodo() {
	const todos = useSelector((state) => state.todos.data);
	const { id } = useParams();

	const todo = todos.find((t) => t._id === id);

	return (
		<BaseLayout>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					<h2>New Todo</h2>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					<TodoEditForm todo={todo}></TodoEditForm>
				</div>
			</div>
		</BaseLayout>
	);
}
