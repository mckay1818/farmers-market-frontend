import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <LoginForm />
      <div className="sign-up-messages">
        Need to create an account?
        <div className="sign-up-links">
          <Link to="/seller-signup" className="link">
            Click here for Seller sign up
          </Link>
          <Link to="/customer-signup" className="link">
            Click here for Customer sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
