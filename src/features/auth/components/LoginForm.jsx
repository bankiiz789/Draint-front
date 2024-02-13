import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function LoginForm({ onClick }) {
  return (
    <form className="flex flex-col justify-around items-center p-[4rem]">
      <div className="text-2xl font-bold">
        {" "}
        <span className="text-amber-600 underline">Login</span> to your account
      </div>
      <div className="pt-[2rem] pb-[1rem] flex flex-col w-full">
        <Input
          type="text"
          placeholder="Enter your Email or Username"
          label="Email or Username"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
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
