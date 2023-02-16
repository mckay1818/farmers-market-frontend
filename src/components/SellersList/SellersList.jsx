import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import "./SellersList.css";

const transformResponse = (seller) => {
  const {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    store_name: storeName,
    store_description: storeDescription,
    address_1: address1,
    city,
    region,
    postal_code: postalCode,
  } = seller;
  return {
    firstName,
    lastName,
    email,
    password,
    storeName,
    storeDescription,
    address1,
    city,
    region,
    postalCode,
  };
};

const SellersList = () => {
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const [sellersState, setSellersState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/sellers`)
      .then((response) => {
        // setIsLoading(true);
        const sellersResponse = response.data.map((seller) =>
          transformResponse(seller)
        );
        setSellersState(sellersResponse);
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
            <Link
              to={`/sellers/${seller.storeName}`}
              className="seller-name"
              state={{ seller }}
            >
              {seller.storeName}
            </Link>
            <div className="seller-info">
              <p>{seller.storeDescription}</p>
              <p>{`Address: ${seller.address1}, ${seller.city}, ${seller.region} ${seller.postalCode}`}</p>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default SellersList;
