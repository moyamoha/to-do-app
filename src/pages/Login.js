import { Link } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <BaseLayout>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <h2>Login</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-5">
          <LoginForm></LoginForm>
          <hr></hr>
          <div className="text-center">
            Need an account? <Link to="/signup">Sign Up here</Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
