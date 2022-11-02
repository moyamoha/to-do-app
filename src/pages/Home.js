import React from "react";
import BaseLayout from "../components/BaseLayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <BaseLayout>
      <div className="row justify-content-center mt-3">
        <div className="col-md-7 text-center">
          <h1>Simply Your Todos. Woo!</h1>
          <p>
            Life is fun. But life is also busy. There's a million different
            things you could be doing. But what matters is
            <u>what</u> you do. We created{" "}
            <b>
              <i>Todo Woo</i>
            </b>{" "}
            to help you make sense of all of your opportunities and live that
            life that matters most to you. Your new organized life awaits.
          </p>
          {loggedIn ? (
            <Link
              role="button"
              className="btn btn-primary btn-lg"
              to="/current"
            >
              Start
            </Link>
          ) : (
            <Link role="button" className="btn btn-primary btn-lg" to="/login">
              Start
            </Link>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}
