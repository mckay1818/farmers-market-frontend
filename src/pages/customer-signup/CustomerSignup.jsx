import CustomerSignUpForm from "../../components/CustomerSignUpForm/CustomerSignUpForm";
import { Link } from "react-router-dom";

const CustomerSignUp = () => {
  return (
    <>
      <CustomerSignUpForm />
      <div className="messages">
        <div className="login">
          Already have an account?
          <Link to="/login">Login here</Link>
        </div>
        <div className="sign-up">
          Need to create a Seller account?
          <Link to="/seller-signup">Click here for Seller sign up</Link>
        </div>
      </div>
    </>
  );
};

export default CustomerSignUp;
