import { useState } from "react";

const SellerSignUpForm = () => {
  const [formField, setFormFields] = useState({
    storeName: "",
    storeDescription: "",
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    city: "",
    region: "",
    postalCode: "",
  });
};

export default SellerSignUpForm;
