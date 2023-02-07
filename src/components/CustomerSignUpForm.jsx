import { useState } from "react";

const CustomerSignUpForm = () => {
  const [formField, setFormFields] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address1: "",
    city: "",
    region: "",
    postalCode: "",
  });
};

export default CustomerSignUpForm;
