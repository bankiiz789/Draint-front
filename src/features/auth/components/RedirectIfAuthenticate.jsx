import React from "react";
import useAuth from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

function RedirectIfAuthenticate({ children }) {
  const { authUser } = useAuth();
  return authUser ? <Navigate to="/homepage" /> : children;
}

export default RedirectIfAuthenticate;
