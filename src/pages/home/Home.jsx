import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <h1>Farmer's Market</h1>
        <p>Connecting Local Growers to Local Buyers</p>
      </main>
      <section>
        <Link to="/login">
          <button>sign in</button>
        </Link>

        <div className="sign-up-messages">
          <p>
            Ready to connect to local buyers?
            <Link to="/seller-signup">Click here for Seller sign up</Link>
          </p>
          <p>
            Need an account to start buying from local growers?
            <Link to="/customer-signup">Click here for Customer sign up</Link>
          </p>
        </div>
      </section>
      <footer>
        <p>
          Image by{" "}
          <a href="https://www.freepik.com/free-vector/hand-drawn-vegetarian-food-landing-page-template_18458436.htm#query=landing%20page%20background%20nature%20food&position=2&from_view=search&track=ais">
            Freepik
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;
