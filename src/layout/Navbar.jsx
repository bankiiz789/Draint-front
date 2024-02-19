import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import useAuth from "../features/auth/hooks/use-auth";
import Input from "../components/Input";
import Avatar from "../features/auth/components/Avatar";
import { Link } from "react-router-dom";
import { HomeIcon, WriteIcon } from "../icons/index.jsx";

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
        // left side login success
        <div className="navbar bg-base-100 shadow min-h-[4rem] rounded-xl gap-1">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Draint</a>
          </div>
          {/* right side */}
          <div className="flex-none gap-1 px-2">
            {/* search */}
            <Input type="search" placeholder="Search..." />
            <Link to="/homepage">
              <div className="btn rounded-full bg-white hover:bg-amber-500 shadow-none border-none hover:text-white group ">
                <HomeIcon className="group-hover:fill-white fill-amber-500" />
              </div>
            </Link>
            <Link to="/write">
              <div className="btn rounded-full bg-white hover:bg-amber-500 shadow-none border-none hover:text-white group ">
                <WriteIcon className="group-hover:fill-white fill-amber-500" />
              </div>
            </Link>

            {/* dropdown */}
            <div className="dropdown dropdown-end">
              {/* avatar */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <Avatar src={authUser?.profileImage} />
              </div>
              {/* list in dropdown */}
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="hover:bg-amber-400 hover:text-white rounded-lg">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="hover:bg-amber-400 hover:text-white rounded-lg">
                  <a>Settings</a>
                </li>
                <li className="hover:bg-amber-400 hover:text-white rounded-lg">
                  {/* <a onClick={logout} >Logout</a> */}
                  <Link onClick={logout} to="/">
                    logout
                  </Link>
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
            <Modal
              title="Login"
              className="btn bg-white border-2 border-amber-500 hover:bg-amber-500 hover:text-white outline-none rounded-full"
            >
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
