import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser, username } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/customers/${username}/cart`, {
        headers: { Authorization: `Bearer ${currentUser}` },
      })
      .then((response) => {
        setCartItems(response.data);
      });
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
        <h2 id="total">
          Total:
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </h2>
      </div>
    </main>
  );
};

export default Cart;
