import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import ProductsList from "../../components/ProductsList/ProductsList";
import NewProductModal from "../../components/ui/NewProductModal/NewProductModal";
import "./SellerPage.css";

const SellerPage = ({ seller }) => {
  const { sellerShopName } = useParams();
  const { username } = useContext(UserContext);

  return (
    <>
      <h1>{sellerShopName}</h1>
      {sellerShopName === username ? (
        <>
          <NewProductModal />
          {/* <Link
            to={`/sellers/${sellerShopName}/profile`}
            className="seller-name profile-link"
            state={{ seller }}
          >
            Edit Profile
          </Link> */}
        </>
      ) : null}
      <main className="products-list-container">
        <ProductsList sellerShopName={sellerShopName} />
      </main>
    </>
  );
};

export default SellerPage;
