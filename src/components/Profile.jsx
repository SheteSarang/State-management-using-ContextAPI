import React, { useContext } from "react";
import UserContext from "../context/UserContext"; // Import the context
import Login from "./Login";

function Profile() {
    console.log("profile rendering...");

  const { user } = useContext(UserContext); // Access the user data from the context

  if (!user) return <div>Please login</div>; // Handle when no user is logged in

  return <div>Welcome, {user.username}!</div>;
}

export default Profile;
