import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import ProductsList from "../../components/ProductsList/ProductsList";
import NewProductModal from "../../components/ui/NewProductModal/NewProductModal";
import "./SellerPage.css";

const SellerPage = () => {
  const { sellerShopName } = useParams();
  const { username } = useContext(UserContext);

  return (
    <>
      <h1>{sellerShopName}</h1>
      {sellerShopName === username ? <NewProductModal /> : null}
      <main className="products-list-container">
        <ProductsList sellerShopName={sellerShopName} />
      </main>
    </>
  );
};

export default SellerPage;
