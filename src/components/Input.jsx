import React from "react";

function Input({ type = "text", placeholder, value, errorMessage }) {
  const extendedClass = errorMessage
    ? "border-red-500 focus:ring-red-300 w-full"
    : "border-2 focus:border-orange-500 focus:outline-orange-500 border-orange-500 w-full";
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      class={`input input-bordered ${extendedClass}`}
    />
  );
}

export default Input;
