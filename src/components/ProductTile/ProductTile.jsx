import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./ProductTile.css";

const ProductTile = ({ product }) => {
  const { role } = useContext(UserContext);

  return (
    <>
      {/* <img /> */}
      <h2>{product.name}</h2>
      <div className="product-summary">
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        {role === "seller" ? (
          <button className="details">edit product</button>
        ): (
          //TODO - add option for adding item to cart if a customer
        )}
   
      </div>
    </>
  );
};

export default ProductTile;
