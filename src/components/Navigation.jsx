import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>🏠</li>
          <li>
            <SearchBar />
          </li>
          {/* <li>
          If Customer, link to cart
          If Seller, nothing here
        </li> */}
          <li>{/* Customer or Seller profile */}</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navigation;
