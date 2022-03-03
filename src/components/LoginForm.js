import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";
import loginUser from "../redux/api/loginUser";
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm() {
	const error = useSelector((state) => state.user.error);
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const sendFormToLogin = (e) => {
		e.preventDefault();
		dispatch(loginUser(formData));
	};
	return (
		<>
			<ErrorAlert error={error}></ErrorAlert>
			<form method="POST" onSubmit={sendFormToLogin}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						className="form-control"
						id="username"
						onChange={(e) =>
							setFormData({
								...formData,
								username: e.target.value,
							})
						}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						className="form-control"
						id="password"
						onChange={(e) =>
							setFormData({
								...formData,
								password: e.target.value,
							})
						}
					></input>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</>
	);
}
