import React from "react";
import Modal from "../components/Modal";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow ">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Draint</a>
      </div>
      <div className="navbar-end">
        <Modal>Login</Modal>
      </div>
    </div>
  );
}

export default Navbar;
