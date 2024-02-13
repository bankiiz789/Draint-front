import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import validateLogin from "../validations/validate-login";

function LoginForm({ onClick }) {
  const [input, setInput] = useState({ emailOrUserName: "", password: "" });
  const [errorLogin, setErrorLogin] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateLogin(input);
    if (validateError) {
      return setErrorLogin(validateError);
    }
  };
  return (
    <form
      className="flex flex-col justify-around items-center p-[4rem]"
      onSubmit={handleSubmit}
    >
      <div className="text-2xl font-bold">
        {" "}
        <span className="text-amber-600 underline">Login</span> to your account
      </div>
      <div className="pt-[2rem] pb-[1rem] flex flex-col w-full">
        <Input
          type="text"
          placeholder="Enter your Email or Username"
          label="Email or Username"
          onChange={handleChangeInput}
          name="emailOrUsername"
          value={input.emailOrUserName}
          errorMessage={errorLogin.emailOrUserName}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
          onChange={handleChangeInput}
          name="password"
          value={input.password}
          errorMessage={errorLogin.password}
        />
      </div>
      <div className="flex flex-col">
        {/* <button className="btn py-1 mb-4 rounded-full w-full">Login now</button> */}
        <Button bg="amber" color="white">
          Login
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          Don't Have An Any Account?{" "}
          <button onClick={onClick} className="text-blue-500">
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
