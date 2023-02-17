import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cartItems, total } = useContext(CartContext);
  console.log(cartItems);
  console.log(total);
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
        <h2>Total: {total}</h2>
      </div>
    </main>
  );
};

export default Cart;
