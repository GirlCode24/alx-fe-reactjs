import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <h1>User Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {}
      <Outlet />
    </div>
  );
}

export default Profile;
