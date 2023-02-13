import SellerSignUpForm from "../../components/SellerSignUpForm/SellerSignUpForm";
import { Link } from "react-router-dom";
import "./SellerSignUp.css";

const SellerSignUp = () => {
  return (
    <>
      <SellerSignUpForm />
      <div className="messages">
        <div className="login link-group">
          Already have an account?
          <Link to="/login" className="links">
            Login here
          </Link>
        </div>
        <div className="sign-up link-group">
          Need to create a Customer account?
          <Link to="/customer-signup" className="links">
            Click here for Customer sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SellerSignUp;
