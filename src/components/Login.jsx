import React, { useState, useContext } from "react";

import UserContext from "../context/UserContext"; // Import the context
// This is the file which will send values to UserContextProvider,
// Which will globally serve the values to different components.In this case-profile component.for this
// useContext hook comes into picture

function Login() {
    console.log("Login rendering...");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    
//Now here using the hook useContext. To save the data coming from UI in that UserContextProvider.jsx(i.e globally)
// you are getting the access to {user} variable and its correponding state {setUser}.
//Since you are updating the user, you will need its state. When u are fetching, only user variable will be sufficient
//So if you want to update the state of variable, use- setUser
  const {setUser} = useContext(UserContext); // Access the setUser function from the context

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
