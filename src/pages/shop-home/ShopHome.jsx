import { prettyDOM } from "@testing-library/react";
import { Link } from "react-router-dom";

const SELLERS = [
  {
    id: 1,
    store_name: "Green Acres",
    store_description:
      "An apple orchard that specializes in homemade pies, jams, and cider.",
    first_name: "Lila",
    last_name: "Parker",
    email: "lilaparker@fakemail.com",
    address_1: "278 Armstrong Rd",
    city: "Hudson",
    region: "New York",
    postal_code: 12534,
  },
  {
    id: 2,
    store_name: "Happy Cows",
    store_description: "A dairy farm in West Tennessee.",
    first_name: "Tammy",
    last_name: "Burns",
    email: "tburns@fakemail.com",
    address_1: "134 Parham Rd",
    city: "Martin",
    region: "Tennessee",
    postal_code: 38237,
  },
];

const ShopHome = () => {
  return (
    <>
      <h1>All of the shops will go here!</h1>
      <ul>
        {SELLERS.map((seller) => (
          <li key={seller.id}>
            <Link to={`/sellers/${seller.store_name.replace("-", " ")}`}>
              {seller.store_name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopHome;
