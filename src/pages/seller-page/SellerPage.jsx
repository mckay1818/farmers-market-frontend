import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsList from "../../components/ProductsList";

const SellerPage = () => {
  const { sellerShopName } = useParams();

  return (
    <>
      <h1>{sellerShopName}</h1>
      <main>
        <ProductsList sellerShopName={sellerShopName} />
      </main>
    </>
  );
};

export default SellerPage;

// const [productsState, setProductsState] = useState([]);

// useEffect(() => {
//   axios
//     .get(
//       `${process.env.REACT_APP_BACKEND_URL}/sellers/${sellerShopName}/products`
//     )
//     .then((response) => {
//       console.log(response);
//       console.log(response.data);
//       setProductsState(response.data);
//     });
// }, [sellerShopName]);

// const productsList = productsState.map((product) => {
//   return (
//     <li key={product.id}>
//       <ProductTile product={product}>
//         {/* <Link to={`/sellers/${sellerShopName}/products/${product.name}`}> */}
//         {product.name}
//         {/* </Link> */}
//       </ProductTile>
//     </li>
//   );
// });
