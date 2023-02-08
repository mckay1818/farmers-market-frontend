import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./components/Navigation";
import SellerSignUpForm from "./pages/seller-signup/SellerSignUpForm";
import CustomerSignUpForm from "./pages/customer-signup/CustomerSignUpForm";
import Login from "./pages/login/Login";

const App = () => {
  // const [token, setToken] = useState("");

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
