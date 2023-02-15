import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SellersList.css";

const SellersList = () => {
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const [sellersState, setSellersState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/sellers`)
      .then((response) => {
        // setIsLoading(true);
        setSellersState(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        // redirect to error page
        // setError("Sellers failed to load");
      });
  }, []);

  return (
    <>
      {sellersState.map((seller) => {
        return (
          <li key={seller.id} className="seller-tile">
            <Link to={`/sellers/${seller.store_name}`} className="seller-name">
              {seller.store_name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SellersList;