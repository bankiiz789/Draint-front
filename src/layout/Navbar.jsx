import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import useAuth from "../features/auth/hooks/use-auth";
import Input from "../components/Input";

function Navbar() {
  const [toggleLoginToRegis, setToggleLoginToRegis] = useState(false);

  const { authUser, logout } = useAuth();

  const handleToggleLoginToRegis = (e) => {
    e.preventDefault();
    setToggleLoginToRegis((prev) => !prev);
  };

  return (
    <>
      {authUser ? (
        // right side login success
        <div className="navbar bg-base-100 shadow">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Draint</a>
          </div>
          {/* left side */}
          <div className="flex-none gap-2">
            {/* search */}
            <Input type="search" placeholder="Search..." />
            <div>home</div>
            <div>write</div>
            {/* dropdown */}
            <div className="dropdown dropdown-end">
              {/* avatar */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              {/* list in dropdown */}
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        // not login
        <div className="navbar bg-base-100 shadow ">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Draint</a>
          </div>
          <div className="navbar-end">
            <Modal title="Login">
              {!toggleLoginToRegis ? (
                <LoginForm onClick={handleToggleLoginToRegis} />
              ) : (
                <RegisterForm onClick={handleToggleLoginToRegis} />
              )}
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
