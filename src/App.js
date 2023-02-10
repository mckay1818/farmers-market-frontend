import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
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
  //   path: "/sellers",
  //   element: <SellerHome />,
  //   children: [],
  // },
  // {
  //   path: "/customers",
  //   element: <CustomerHome />,
  //   children: [],
  // },
]);

const App = () => {
  // const [token, setToken] = useState("");

  return <RouterProvider router={router} />;
};

export default App;
