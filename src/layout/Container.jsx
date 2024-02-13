import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function Container() {
  return (
    <div className="max-w-[1150px] m-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Container;
