import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext"; // Import the context

function Login() {
    console.log("Login rendering...");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
