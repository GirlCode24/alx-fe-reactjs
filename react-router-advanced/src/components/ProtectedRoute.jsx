import React from "react";
import { Navigate } from "react-router-dom";


function useAuth() {

  const user = localStorage.getItem("user");
  return { user };
}

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); 

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
