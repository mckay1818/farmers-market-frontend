import { useState } from "react";

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

const CustomerSignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const onFormChange = (changeEvent) => {
    const { key, value } = changeEvent.target;
    setFormFields({ ...formFields, [key]: value });
  };

  return (
    <form>
      <div>
        <label htmlFor="firstName">first name:</label>
        <input
          name="firstName"
          value={formFields.firstName}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">last name:</label>
        <input
          name="lastName"
          value={formFields.lastName}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="username">username:</label>
        <input
          name="username"
          value={formFields.username}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input name="email" value={formFields.email} onChange={onFormChange} />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input
          name="password"
          value={formFields.password}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="address1">street address:</label>
        <input
          name="address1"
          value={formFields.address1}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="city">city:</label>
        <input name="city" value={formFields.city} onChange={onFormChange} />
      </div>
      <div>
        <label htmlFor="region">region:</label>
        <input
          name="region"
          value={formFields.region}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="postalCode">postal code:</label>
        <input
          name="postalCode"
          value={formFields.postalCode}
          onChange={onFormChange}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default CustomerSignUpForm;
