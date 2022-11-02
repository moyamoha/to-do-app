import React from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <BaseLayout>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <h2>Sign Up</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-5">
          <SignupForm></SignupForm>
          <hr></hr>
          <div className="text-center">
            Do you already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
