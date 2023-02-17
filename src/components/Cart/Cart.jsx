import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              <CartItem product={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
