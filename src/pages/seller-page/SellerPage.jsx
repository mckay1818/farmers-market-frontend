import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ProductTile from "../../components/ProductTile";

const SellerPage = () => {
  const { sellerShopName } = useParams();
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/sellers/${sellerShopName}/products`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setProductsState(response.data);
      });
  }, [sellerShopName]);

  const productsList = productsState.map((product) => {
    return (
      <li key={product.id}>
        <ProductTile product={product}>
          {/* <Link to={`/sellers/${sellerShopName}/products/${product.name}`}> */}
          {product.name}
          {/* </Link> */}
        </ProductTile>
      </li>
    );
  });

  return (
    <>
      <h1>{sellerShopName}</h1>
      <main>{productsList}</main>
    </>
  );
};

export default SellerPage;
