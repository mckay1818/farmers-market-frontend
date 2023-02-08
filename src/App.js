import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./components/Navigation";
import SellerSignUpForm from "./components/SellerSignUpForm";
import CustomerSignUpForm from "./components/CustomerSignUpForm";
import Login from "./routes/login/Login";

const App = () => {
  // const [token, setToken] = useState("");

  // const products = [
  //   {
  //     name: "Sweet Corn",
  //     price: 3,
  //     quantity: 20,
  //     image_file: null,
  //     description: "Delicious sweet corn",
  //   },
  //   {
  //     name: "Sweet Corn",
  //     price: 3,
  //     quantity: 20,
  //     image_file: null,
  //     description: "Delicious sweet corn",
  //   },
  // ];

  // console.log(products);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/seller-signup" element={<SellerSignUp />} /> */}
      {/* <Route element={<Navigation />} /> */}
    </Routes>
  );
};

export default App;
