import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopHome = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [sellersState, setSellersState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/sellers`)
      .then((response) => {
        setIsLoading(true);
        setSellersState(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Sellers failed to load");
      });
  }, []);

  const sellers = sellersState.map((seller) => {
    return (
      <li key={seller.id}>
        <Link to={`/sellers/${seller.store_name}`} key={seller.id}>
          {seller.store_name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1>All of the shops will go here!</h1>
      {isLoading && <p>Loading sellers</p>}
      {!isLoading && sellersState && <ul>{sellers}</ul>}
    </>
  );
};

export default ShopHome;
