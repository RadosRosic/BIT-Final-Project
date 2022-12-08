import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ token, route, children }) => {
  if (!token) {
    return <Navigate to={route} />;
  }

  return children;
};

export default ProtectedRoute;
