import LoginForm from "../../components/LoginForm/LoginForm";
import { Link, redirect } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  return (
    <>
      <LoginForm />
      <div className="messages">
        <div className="link-group">
          Need to create an account?
          <div className="sign-up-links">
            <Link to="/seller-signup" className="links">
              Click here for Seller sign up
            </Link>
            <Link to="/customer-signup" className="links">
              Click here for Customer sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// export async function action({ request }) {
//   const data = await request.formData();
//   console.log(request);
//   const authData = {
//     email: data.get("email"),
//     password: data.get("password"),
//   };
//   //axios automatically converts 2nd param to JSON if obj
//   //also automativally sets content-type header to application/json
//   axios
//     .post(`${process.env.REACT_APP_BACKEND_URL}/login`, authData)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       return error;
//     });
//   return redirect("/sellers");
// }
