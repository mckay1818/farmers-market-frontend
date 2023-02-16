import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./components/ui/LandingPageLayout/LandingPageLayout";
import Layout from "./components/ui/Layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import SellerSignUp from "./pages/seller-signup/SellerSignUp";
import CustomerSignUp from "./pages/customer-signup/CustomerSignup";
import AuthUserHome from "./pages/auth-user-home/AuthUserHome";
import SellerPage from "./pages/seller-page/SellerPage";
import { UserContextProvider } from "./contexts/UserContext";
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
      { path: "/logout", element: <Logout /> },
      { path: "/seller-signup", element: <SellerSignUp /> },
      { path: "/customer-signup", element: <CustomerSignUp /> },
    ],
  },
  //SELLER ROUTES ARE NOT PROTECTED ASIDE FROM PROFILE (AND ADD PRODUCT FUNCTIONALITY)
  {
    path: "/sellers",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/sellers", element: <AuthUserHome /> },
      { path: "/sellers/:sellerShopName", element: <SellerPage /> },
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
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default App;
