import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root/RootLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/seller-signup", element: <SellerSignUp /> },
      { path: "/customer-signup", element: <CustomerSignUp /> },
    ],
  },
  {
    path: "/sellers",
    element: <SellerHome />,
    children: [],
  },
  {
    path: "/customers",
    element: <CustomerHome />,
    children: [],
  },
]);

const App = () => {
  // const [token, setToken] = useState("");

  return <RouterProvider router={router} />;
};

export default App;
