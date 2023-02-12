import { Link } from "react-router-dom";

const SellersList = ({ sellers }) => {
  const sellersList = sellers.map((seller) => {
    return (
      <li key={seller.id}>
        <Link to={`/sellers/${seller.store_name}`} key={seller.id}>
          {seller.store_name}
        </Link>
      </li>
    );
  });
};

export default SellersList;
