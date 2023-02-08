import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Farmer's Market</h1>
        <p>Connecting Local Growers to Local Buyers</p>
      </main>
      <section>
        {/* add links to login, signup forms */}
        {/* <Route index element={<SellerSignUpForm />} />
      <Route index element={<CustomerSignUpForm />} /> */}
        <Link to="/login">
          <button>sign in</button>
        </Link>

        <div className="sign-up-messages">
          <p>Ready to connect to local buyers? Click here for Seller sign up</p>
          <p>
            Need an account to start buying from local growers? Click here for
            User sign up
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
