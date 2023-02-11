import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ShopHome from "./pages/shop-home/ShopHome";
import SellerPage from "./pages/seller-page/SellerPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      // { path: "/seller-signup", element: <SellerSignUp /> },
      // { path: "/customer-signup", element: <CustomerSignUp /> },
    ],
  },
  // {
  //   path: "/seller-signup",
  //   element: <SellerSignUp />,
  //   children: [],
  // },
  // {
  //   path: "/customer-signup",
  //   element: <CustomerSignUp />,
  //   children: [],
  // },
  // {
  //   path: "/sellers/:sellerShopName",
  //   element: <SellerPage />,
  //   children: [],
  // },
  {
    path: "/sellers",
    children: [
      { index: true, element: <ShopHome /> },
      { path: "/sellers/:sellerShopName", element: <SellerPage /> },
    ],
  },
  // {
  //   path: "/customers/:customerUsername",
  //   element: <CustomerHome />,
  //   children: [
  //      { path: "/customers/:customerUsername/profile", element: <CustomerProfile /> },
  //      { path: "/customers/:customerUsername/cart", element: <CustomerCart /> },
  // ],
  // },
]);

const App = () => {
  // const [token, setToken] = useState("");

  return <RouterProvider router={router} />;
};

export default App;
