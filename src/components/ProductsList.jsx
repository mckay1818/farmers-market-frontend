import { useState, useEffect } from "react";
import axios from "axios";
import ProductTile from "./ProductTile";

const ProductsList = ({ sellerShopName }) => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/sellers/${sellerShopName}/products`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setProductsState(response.data);
      });
  }, [sellerShopName]);

  return (
    <>
      {productsState.map((product) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}>
              {/* <Link to={`/sellers/${sellerShopName}/products/${product.name}`}> */}
              {product.name}
              {/* </Link> */}
            </ProductTile>
          </li>
        );
      })}
    </>
  );
};

export default ProductsList;
