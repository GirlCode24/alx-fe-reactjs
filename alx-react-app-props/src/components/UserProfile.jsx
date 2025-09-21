import React, { useContext } from "react";
import { UserContext } from "../components/UserContext"; 

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
