import React, { useState } from "react";
import UserContext from "./UserContext"; // Import the UserContext

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the user data
  const [password, setPassword] = useState(null); 
  console.log("UserContextProvider rendering...");

  return (
    <UserContext.Provider value={{ user, setUser, password, setPassword }}>
      {children} {/* Pass children components */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
