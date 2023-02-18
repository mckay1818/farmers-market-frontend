import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../contexts/CartContext";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductsList.css";

const ProductsList = ({ sellerShopName, setItemAddedMsg }) => {
  const [productsState, setProductsState] = useState([]);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/sellers/${sellerShopName}/products`
      )
      .then((response) => {
        // TODO - SORT PRODUCTS
        // let productsResponse = response.data;
        // productsResponse.sort((a, b) => a.name - b.name);
        setProductsState(response.data);
      });
  }, [sellerShopName, cartItems]);

  return (
    <>
      {productsState.map((product) => {
        /* filter out-of-stock products out of store display */

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
