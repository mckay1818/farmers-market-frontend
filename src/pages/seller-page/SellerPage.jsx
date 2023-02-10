import { useParams } from "react-router-dom";

const SellerPage = () => {
  const params = useParams();

  return <p>{params.sellerShopName}</p>;
};

export default SellerPage;
