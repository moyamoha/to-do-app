import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import BaseLayout from "../components/BaseLayout";
import CompletedTodo from "../components/CompletedTodo";

export default function Completed() {
	const todos = useSelector((state) => state.todos.data);

	const completed = useMemo(() => {
		const result = todos.filter((td) => td.state === "completed");
		result.sort((a, b) => {
			return new Date(b.dateCompleted) - new Date(a.dateCompleted);
		});
		return result;
	}, [todos]);
	return (
		<BaseLayout>
			<div className="row justify-content-center mt-5">
				<div className="col-md-10">
					<h1>Completed Todos</h1>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-10">
					<div className="list-group">
						{completed.map((td) => (
							<CompletedTodo key={td._id} todo={td}></CompletedTodo>
						))}
					</div>
				</div>
			</div>
		</BaseLayout>
	);
}
