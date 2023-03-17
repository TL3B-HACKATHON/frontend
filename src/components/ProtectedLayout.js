import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, Navigate, useOutlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <Link to="/settings">Settings</Link>  
        <Link to="/profile">Profile</Link>
      </nav>
      {outlet}
    </div>
  );
};
