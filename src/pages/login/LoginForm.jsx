import { useState } from "react";
import axios from "axios";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const onFormChange = (changeEvent) => {
    const { name, value } = changeEvent.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form>
      <div>
        <label htmlFor="email">email:</label>
        <input
          name="email"
          type="email"
          value={formFields.email}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input
          name="password"
          type="password"
          value={formFields.password}
          onChange={onFormChange}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
