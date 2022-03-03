import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import createTodo from "../redux/api/addNewTodo";

export default function NewTodoForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		title: "",
		description: "",
		important: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createTodo(form));
		navigate("/current");
	};
	return (
		<>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					<h2>New Todo</h2>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					{/* 					{error ? (
						<div className="alert alert-danger" role="alert">
							{error}
						</div>
					) : (
						<></>
					)} */}
					<form method="POST" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								name="title"
								className="form-control"
								id="title"
								required
								value={form.title}
								onChange={(e) =>
									setForm({
										...form,
										title: e.target.value,
									})
								}
							></input>
						</div>
						<div className="form-group">
							<label htmlFor="memo">Memo</label>
							<textarea
								name="memo"
								className="form-control"
								id="memo"
								value={form.description}
								onChange={(e) =>
									setForm({
										...form,
										description: e.target.value,
									})
								}
							></textarea>
						</div>
						<div className="form-group form-check">
							<input
								type="checkbox"
								name="important"
								className="form-check-input"
								id="important"
								checked={form.important}
								onChange={function (e) {
									setForm({
										...form,
										important: e.target.checked,
									});
								}}
							></input>
							<label className="form-check-label" htmlFor="important">
								Important
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
