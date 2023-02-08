import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form>
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
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
