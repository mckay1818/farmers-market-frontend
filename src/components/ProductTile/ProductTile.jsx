import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import "./ProductTile.css";

const ProductTile = ({ product }) => {
  const { role, username, currentUser } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddingItem = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/customers/${username}/cart/${product.id}`,
        product.id,
        {
          headers: { Authorization: `Bearer ${currentUser}` },
        }
      )
      .then((response) => {
        setCartItems(response.data);
        alert("Item added to cart!");
      })
      .catch((e) => {
        console.log(e);
        alert(e.response.data.message);
      });
  };

  return (
    <>
      {/* <img /> */}
      <h2>{product.name}</h2>
      <div className="product-summary">
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        {role === "seller" ? (
          <button className="details">edit product</button>
        ) : (
          <button onClick={handleAddingItem}>add to cart</button>
        )}
      </div>
    </>
  );
};

export default ProductTile;
