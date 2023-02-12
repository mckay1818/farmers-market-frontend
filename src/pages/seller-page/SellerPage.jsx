import { useParams } from "react-router-dom";
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
