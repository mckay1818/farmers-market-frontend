import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [sellersState, setSellersState] = useState([]);

  const fetchSellers = () => {
    fetch("http://127.0.0.1:5000/sellers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSellersState(data);
        console.log(sellersState);
      });
  };

  const sellers = sellersState.map((seller) => {
    return (
      <li key={seller.id}>
        <Link to={`/sellers/${seller.store_name.replace("-", " ")}`}>
          {seller.store_name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1>All of the shops will go here!</h1>
      <button onClick={fetchSellers}>get sellers</button>
      <ul>{sellers}</ul>
    </>
  );
};

export default ShopHome;
