import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/user";

export default function Header() {
	const loggedIn = useSelector((state) => state.user.loggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-warning">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img
						src="/logo.png"
						width="28"
						height="28"
						className="d-inline-block align-top"
						alt="Logo of the website"
					></img>{" "}
					<span>Todo Woo</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					{loggedIn ? (
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to={"/current"}>
									Current
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/completed"}>
									Completed
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/create"}>
									Create
								</Link>
							</li>
						</ul>
					) : (
						<></>
					)}
					<ul className="navbar-nav ml-auto">
						{loggedIn ? (
							<li className="nav-item">
								<button
									id="signOutBtn"
									type="button"
									className="border border-0 bg-transparent nav-link"
									onClick={() => {
										dispatch(logout());
										navigate("/");
									}}
								>
									Logout
								</button>
							</li>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/signup">
										Sign Up
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										Login
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
