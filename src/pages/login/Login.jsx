import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <LoginForm />
      <div className="messages">
        <div className="link-group">
          Need to create an account?
          <div className="sign-up-links">
            <Link to="/seller-signup" className="links">
              Click here for Seller sign up
            </Link>
            <Link to="/customer-signup" className="links">
              Click here for Customer sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
