import { useState } from "react";
import FormInput from "../components/FormInput";

function Register() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      pattern: "^[A-Za-zÀ-ÿ ,.'-]+$",
      errorMsg: "Only Contains Letters",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMsg: "Its not a email address",
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      pattern: "^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$",
      errorMsg:
        "Usename must Must be 3 Letter long and contain min 1 Uppercase Letter, 1 Lowercase lettr and Only _ - symbol in the midlle",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
      errorMsg:
        "Password Must be 8 Letter long and contains  1 Uppercase Letter, 1 Lowercase letter, 1 symbol ",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      pattern: values.password,
      errorMsg: "Password Not matched",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
