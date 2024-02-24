import React from "react";
import useAuth from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { authUser } = useAuth();
  return authUser ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
