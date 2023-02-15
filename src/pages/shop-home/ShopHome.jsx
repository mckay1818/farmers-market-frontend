import SellersList from "../../components/SellersList/SellersList";
import "./ShopHome.css";

const ShopHome = () => {
  return (
    <>
      <h1>Welcome to your local market</h1>
      <main className="sellers-list-container">
        <SellersList />
      </main>
    </>
  );
};

export default ShopHome;
