import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

const OrderSuccess = () => {
  const { username, currentUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/customers/${username}/order/success`,
        {
          headers: {
            Authorization: `Bearer ${currentUser}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return <h2>Order has been placed! Thank you for buying local</h2>;
};

export default OrderSuccess;
