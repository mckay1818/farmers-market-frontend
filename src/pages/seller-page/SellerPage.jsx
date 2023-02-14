import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./SellerPage.css";

const SellerPage = () => {
  const { sellerShopName } = useParams();

  return (
    <>
      <h1>{sellerShopName}</h1>
      <main className="products-list">
        <ProductsList sellerShopName={sellerShopName} />
      </main>
    </>
  );
};

export default SellerPage;
