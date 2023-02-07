import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";

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
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
