import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const SELLERS = [
//   {
//     id: 1,
//     store_name: "Green Acres",
//     store_description:
//       "An apple orchard that specializes in homemade pies, jams, and cider.",
//     first_name: "Lila",
//     last_name: "Parker",
//     email: "lilaparker@fakemail.com",
//     address_1: "278 Armstrong Rd",
//     city: "Hudson",
//     region: "New York",
//     postal_code: 12534,
//   },
//   {
//     id: 2,
//     store_name: "Happy Cows",
//     store_description: "A dairy farm in West Tennessee.",
//     first_name: "Tammy",
//     last_name: "Burns",
//     email: "tburns@fakemail.com",
//     address_1: "134 Parham Rd",
//     city: "Martin",
//     region: "Tennessee",
//     postal_code: 38237,
//   },
// ];

const ShopHome = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [sellersState, setSellersState] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/sellers")
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
