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
        setProductsState(response.data);
      });
  }, []);

  // const fetchProducts = () => {
  //   fetch(`http://127.0.0.1:5000/sellers/${sellerShopName}/products`)
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log(response);
  //         console.log(response.json());
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setProductsState(data);
  //     });
  // };

  const productsList = productsState.map((product) => {
    console.log(productsState);
    return (
      <li key={product.id}>
        <ProductTile product={product}>
          <Link to={`/sellers/products/${product.name}`}>{product.name}</Link>
        </ProductTile>
      </li>
    );
  });

  return (
    <>
      {console.log(productsList)}
      <h1>{sellerShopName}</h1>
      <main>{productsList}</main>
    </>
  );
};

export default SellerPage;
