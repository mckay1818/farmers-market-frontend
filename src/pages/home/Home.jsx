import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <Link className="login-button" to="/login">
        <button className="login-button">sign in</button>
      </Link>
      <div className="sign-up-messages">
        <p>
          Ready to connect to local buyers?
          <Link to="/seller-signup" className="links">
            Click here for Seller sign up
          </Link>
        </p>
        <p>
          Need an account to start buying from local growers?
          <Link to="/customer-signup" className="links">
            Click here for Customer sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
