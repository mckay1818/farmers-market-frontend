import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./components/ui/LandingPageLayout/LandingPageLayout";
import PublicRoute from "./components/ui/PublicRoute/PublicRoute";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SellerSignUp from "./pages/seller-signup/SellerSignUp";
import CustomerSignUp from "./pages/customer-signup/CustomerSignup";
import ShopHome from "./pages/shop-home/ShopHome";
import SellerPage from "./pages/seller-page/SellerPage";
import UserContext from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/seller-signup", element: <SellerSignUp /> },
      { path: "/customer-signup", element: <CustomerSignUp /> },
    ],
  },
  //SELLER ROUTES ARE NOT PROTECTED ASIDE FROM PROFILE (AND ADD PRODUCT FUNCTIONALITY)
  {
    path: "/sellers",
    element: <PublicRoute />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/sellers", element: <ShopHome /> },
      { path: "/sellers/:sellerShopName", element: <SellerPage /> },
      // NEW PRODUCT FORM (restricted modal, not new path)
      // { path: "/sellers/:sellerShopName/profile", element: <SellerProfile /> },
    ],
  },
  {
    path: "/customers/:customerUsername",
    element: <PrivateRoute />,
    // children: [
    //   {
    //     path: "/customers/:customerUsername/profile",
    //     element: <CustomerProfile />,
    //   },
    //   { path: "/customers/:customerUsername/cart", element: <CustomerCart /> },
    // ],
  },
]);

const App = () => {
  const [token, setToken] = useState(null);
  const [isSeller, setIsSeller] = useState("");
  const [isCustomer, setIsSisCustomer] = useState("");

  return (
    <UserContext.Provider
      value={{
        token: token,
        isSeller: isSeller,
        isCustomer: isCustomer,
        // onLogout: logoutHandler,
      }}
    >
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
