import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../contexts/CartContext";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductsList.css";

const ProductsList = ({ sellerShopName }) => {
  const [productsState, setProductsState] = useState([]);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/sellers/${sellerShopName}/products`
      )
      .then((response) => {
        setProductsState(response.data);
      });
  }, [sellerShopName, cartItems]);

  return (
    <>
      {productsState.map((product) => {
        return product.quantity === 0 ? null : (
          <li key={product.id} className="product-tile">
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </>
  );
};

export default ProductsList;
