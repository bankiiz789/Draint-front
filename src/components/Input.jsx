import React from "react";

function Input({
  type = "text",
  placeholder,
  value,
  errorMessage,
  label,
  name,
  onChange,
}) {
  const extendedClass = errorMessage
    ? "border-2 border-red-500 focus:ring-red-300 w-full"
    : "border-1 focus:border-amber-500 focus:outline-amber-500 border-amber-500 w-full";
  return (
    <>
      <label className="form-control w-full max-w-xs mb-[1rem]">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`input input-bordered ${extendedClass}  w-full min-w-l placeholder:text-xs`}
          onChange={onChange}
        />
      </label>
      <div>
        {errorMessage ? (
          <small className="text-red-500">{errorMessage}</small>
        ) : null}
      </div>
    </>
  );
}

export default Input;
