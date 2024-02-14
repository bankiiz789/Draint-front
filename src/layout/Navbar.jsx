import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";

function Navbar() {
  const [haveAccount, setHaveAccount] = useState(false);
  const [open, setOpen] = useState(false);

  const handleHaveAccount = (e) => {
    e.preventDefault();
    setHaveAccount((prev) => !prev);
  };
  return (
    <div className="navbar bg-base-100 shadow ">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Draint</a>
      </div>
      <div className="navbar-end">
        <Modal>
          {!haveAccount ? (
            <LoginForm onClick={handleHaveAccount} />
          ) : (
            <RegisterForm onClick={handleHaveAccount} />
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
