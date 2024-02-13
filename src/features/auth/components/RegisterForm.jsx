import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import validateRegister from "../validations/validate-register";

const initial = {
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm({ onClick }) {
  const [input, setInput] = useState(initial);
  const [errorRegis, setErrorRegis] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateRegister(input);
    if (validateError) {
      return setErrorRegis(validateError);
    }
  };

  return (
    <form className="flex flex-col justify-around items-center p-[4rem] ">
      <div className="text-2xl font-bold">
        <span className="text-amber-600 underline">Create</span> an account
      </div>
      <div className="pt-[2rem] pb-[1rem] flex flex-col w-full">
        <Input
          type="email"
          placeholder="Enter your Email"
          label="Email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          errorMessage={errorRegis.email}
        />
        <Input
          type="text"
          placeholder="Enter your Username"
          label="Username"
          name="userName"
          value={input.userName}
          onChange={handleChangeInput}
          errorMessage={errorRegis.userName}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          errorMessage={errorRegis.password}
        />
        <Input
          type="password"
          placeholder="Enter your confirm password"
          label="Confirm Password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          errorMessage={errorRegis.confirmPassword}
        />
      </div>
      <div className="flex flex-col">
        {/* <button className="btn py-1 mb-4 rounded-full w-full">Login now</button> */}
        <Button bg="amber" color="white">
          Create Account
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          Already Have An Account?
          <button onClick={onClick} className="text-blue-500">
            Login
          </button>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
