import React, { useEffect, useRef } from "react";
import ErrorAlert from "./ErrorAlert";
import loginUser from "../redux/api/loginUser";
import { useDispatch, useSelector } from "react-redux";
import { setLogging } from "../redux/slices/user";

export default function LoginForm() {
  const error = useSelector((state) => state.user.error);
  const loggingIn = useSelector((state) => state.user.loggingIn);
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();

  useEffect(() => {
    username.current.value = "";
    password.current.value = "";
  }, []);

  const sendFormToLogin = (e) => {
    e.preventDefault();
    dispatch(setLogging());
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
      <form method="POST" onSubmit={sendFormToLogin}>
        <div className="form-group mb-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            autoComplete="off"
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
            autoComplete="off"
            ref={password}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          {loggingIn && !error ? "Logging ..." : "Login"}
        </button>
      </form>
    </>
  );
}
