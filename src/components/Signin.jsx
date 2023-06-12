import React, { useContext, useState } from "react";
import './signup.css'
import context from "../context/context";
function RegistrationForm() {
  const a=useContext(context)
  const login=a.login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    login({email,password})
  };

  return (
    <div className="signup container">
      <h1 className="text-center my-3 mt-5">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        
        <button type="submit">Sign in</button>
        <div className="mt-2 lll">New Here? <a href="/register">Register</a></div>

      </form>
    </div>
  );
}

export default RegistrationForm;
