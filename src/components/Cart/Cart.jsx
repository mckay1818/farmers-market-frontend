import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser, username } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/customers/${username}/cart/checkout`,
        cartItems,
        {
          headers: {
            Authorization: `Bearer ${currentUser}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        const url = response.data;
        window.location.href = url;
        // to open in new tab - window.open(url);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/customers/${username}/cart`, {
        headers: { Authorization: `Bearer ${currentUser}` },
      })
      .then((response) => {
        setCartItems(response.data);
      });
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <main className="cart-page">
      <div className="items-list">
        {cartItems.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              <CartItem product={item} />
            </li>
          );
        })}
      </div>
      <div className="checkout-section">
        {message ? <span>{message}</span> : null}
        <h2 id="total">
          Total:
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </h2>
        <button className="checkout-btn" type="submit" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </main>
  );
};

export default Cart;
