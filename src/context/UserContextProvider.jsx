import React, { useState } from "react";
import UserContext from "./UserContext"; // Import the UserContext

const UserContextProvider = ({ children }) => {                          //initializing the global thing with null values
  const [user, setUser] = useState(null);  user is a variable         // So user is variable and state is a function. So you can pass both variable and function
  const [password, setPassword] = useState(null); 
  console.log("UserContextProvider rendering...");

  return (
    <UserContext.Provider value={{ user, setUser, password, setPassword }}>  {/*so UserContext will give you a major thing- a provider. A provider will be used as a sandwhich where inbetween you can put your components.*/}
      {children} {/* here the components will come */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
