import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import "./ProductTile.css";

const ProductTile = ({ product }) => {
  const { role } = useContext(UserContext);
  const { addItemToCart, addToTotal } = useContext(CartContext);

  const handleAddingItem = () => {
    addItemToCart(product);
    addToTotal(product.price);
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
