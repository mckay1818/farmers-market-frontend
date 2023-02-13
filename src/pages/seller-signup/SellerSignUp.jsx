import SellerSignUpForm from "../../components/SellerSignUpForm/SellerSignUpForm";
import { Link } from "react-router-dom";

const SellerSignUp = () => {
  return (
    <>
      <SellerSignUpForm />
      <div className="messages">
        <div className="login">
          Already have an account?
          <Link to="/login">Login here</Link>
        </div>
        <div className="sign-up">
          Need to create a Customer account?
          <Link to="/customer-signup">Click here for Customer sign up</Link>
        </div>
      </div>
    </>
  );
};

export default SellerSignUp;
