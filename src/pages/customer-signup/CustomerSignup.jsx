import CustomerSignUpForm from "../../components/CustomerSignUpForm/CustomerSignUpForm";
import { Link } from "react-router-dom";
import "./CustomerSignUp.css";

const CustomerSignUp = () => {
  return (
    <>
      <CustomerSignUpForm />
      <div className="messages">
        <div className="login link-group">
          Already have an account?
          <Link to="/login" className="links">
            Login here
          </Link>
        </div>
        <div className="sign-up link-group">
          Need to create a Seller account?
          <Link to="/seller-signup" className="links">
            Click here for Seller sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default CustomerSignUp;
