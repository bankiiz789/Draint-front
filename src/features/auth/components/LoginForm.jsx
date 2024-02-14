import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import validateLogin from "../validations/validate-login";
import useAuth from "../hooks/use-auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function LoginForm({ onClick }) {
  const [input, setInput] = useState({ emailOrUserName: "", password: "" });
  const [errorLogin, setErrorLogin] = useState({});

  //context
  const { login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateLogin(input);
      if (validateError) {
        return setErrorLogin(validateError);
      }
      console.log(input);
      await login(input);
      toast.success("Login success fully");
      setInput({ emailOrUserName: "", password: "" });
      document.getElementById("my_modal_2").close();
    } catch (err) {
      toast.error(err.response?.data.message);
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
          name="emailOrUserName"
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
          <div className="text-center pt-4 text-blue-500">
            <Link
              to="/homepage"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              Continue With Guest ?
            </Link>
          </div>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
