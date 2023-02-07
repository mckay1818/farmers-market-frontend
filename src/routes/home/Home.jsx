import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Farmer's Market</h1>
        <p>Connecting Local Growers to Local Buyers</p>
      </main>
      <section>
        <button>sign in</button>
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
