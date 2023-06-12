import React, { useContext, useState,useEffect } from "react";
import  { useLocation } from "react-router-dom";

import './signup.css'
import context from "../context/context";
function RegistrationForm() {
  const a=useContext(context)
  const register=a.register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [upi, setUpi] = useState("");
  const [address, setAddress] = useState("");
const [number, setnumber] = useState('')
const [name, setname] = useState('')
const [terms, setterms] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUpiChange = (event) => {
    setUpi(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlenumberChange = (event) => {
    setnumber(event.target.value);
  };
  const handlenameChange = (event) => {
    setname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setterms(true)
  };
  const handleaccept = (event) => {
    event.preventDefault();
    register({number,email,upi,email,upi,address,password,name})
    
  };


  return (

    <>
    {
      terms ?
      <div className="terms-and-conditions text-center">
      <h1>Terms and Conditions</h1>
      <h2>Term 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien dui. Vivamus et massa magna. Morbi fringilla dui non arcu ultrices, eu laoreet enim ultricies. Nullam tincidunt arcu vel nisi maximus, eget ultrices odio sodales. Nam a sapien quis quam consectetur congue. Sed ut sem id arcu dapibus vehicula nec ac lectus. Mauris cursus vestibulum dapibus. Integer et ultricies eros. Donec finibus ultrices massa, ac imperdiet metus aliquam in. Integer feugiat dui at nisi interdum dapibus.</p>
      <h2>Term 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien dui. Vivamus et massa magna. Morbi fringilla dui non arcu ultrices, eu laoreet enim ultricies. Nullam tincidunt arcu vel nisi maximus, eget ultrices odio sodales. Nam a sapien quis quam consectetur congue. Sed ut sem id arcu dapibus vehicula nec ac lectus. Mauris cursus vestibulum dapibus. Integer et ultricies eros. Donec finibus ultrices massa, ac imperdiet metus aliquam in. Integer feugiat dui at nisi interdum dapibus.</p>
      <h2>Term 3</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien dui. Vivamus et massa magna. Morbi fringilla dui non arcu ultrices, eu laoreet enim ultricies. Nullam tincidunt arcu vel nisi maximus, eget ultrices odio sodales. Nam a sapien quis quam consectetur congue. Sed ut sem id arcu dapibus vehicula nec ac lectus. Mauris cursus vestibulum dapibus. Integer et ultricies eros. Donec finibus ultrices massa, ac imperdiet metus aliquam in. Integer feugiat dui at nisi interdum dapibus.</p>
     <button className="btn btn-info" onClick={handleaccept}>Accept</button>

    </div>
    
    :<div className="signup container">
      <h1 className="text-center my-3 mt-5">Join affiliate and start earning</h1>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="name" value={name} onChange={handlenameChange} required />
        </label>
        <br />

        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        
        <label>
          Mobile Number:
          <input type="Number" value={number} onChange={handlenumberChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <label>
          UPI:
          <input type="text" value={upi} onChange={handleUpiChange} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} required />
        
        </label>
        <br />
        <button type="submit" >Register</button>
         <div className="mt-2 lll">Already Have Account? <a href="/login">Login</a></div>

      </form>
    </div>}
    </>
  );
}

export default RegistrationForm;
