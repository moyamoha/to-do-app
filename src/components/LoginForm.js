import React, { useEffect, useRef, useState } from "react";
import ErrorAlert from "./ErrorAlert";
import loginUser from "../redux/api/loginUser";
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm() {
	const error = useSelector((state) => state.user.error);
	const dispatch = useDispatch();
	const username = useRef();
	const password = useRef();

	useEffect(() => {
		console.log(username.current.value);
		console.log(password.current.value);
		username.current.value = "";
		password.current.value = "";
	}, []);

	const sendFormToLogin = (e) => {
		e.preventDefault();
		dispatch(
			loginUser({
				username: username.current.value,
				password: password.current.value,
			})
		);
		e.target.reset();
	};
	return (
		<>
			<ErrorAlert error={error}></ErrorAlert>
			<form method="POST" autoComplete={false} onSubmit={sendFormToLogin}>
				<input
					type="text"
					style={{ display: "none" }}
					autoComplete={false}
					name="hidden"
				></input>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						className="form-control"
						id="username"
						ref={username}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						className="form-control"
						id="password"
						ref={password}
					></input>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</>
	);
}
