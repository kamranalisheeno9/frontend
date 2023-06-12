import React, { useEffect, useState } from 'react';
import context from './context.js';
const host = "https://ganesh-production.up.railway.app"
const State = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [upi, setUpi] = useState("");
  const [address, setAddress] = useState("");
  const [name, setname] = useState("")
  const [number, setnumber] = useState("")
  const [reffer, setreffer] = useState("")
  const login = async (data) => {
    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('paisa-login-token', json.token)
      window.location.reload()
      window.location = '/affiliate'

    } else {
      alert(json.message)
    }
  }
  const register = async (data) => {
    const response = await fetch(`${host}/api/user/register`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('paisa-login-token', json.token)
      window.location.reload()
      window.location = '/affiliate'

    } else {
      alert(json.message)
    }
  }
  const update = async (data) => {
    const response = await fetch(`${host}/api/user/updateuser`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "Authentication": localStorage.getItem("paisa-login-token")

      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      window.location.reload()

    } else {
      alert(json.message)
    }
  }
  const contact = async (data) => {
    const response = await fetch(`${host}/api/user/contact`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json"

      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      alert("Sent Succcessfully! Our team will get back to you shortly")
    } else {
      alert("Something Went wrong")
    }
  }
  const getuser = async (data) => {
    const response = await fetch(`${host}/api/user/getuser`, {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "Authentication": localStorage.getItem("paisa-login-token")
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      setEmail(json.user.email)
      setnumber(json.user.number)
      setUpi(json.user.upi)
      setAddress(json.user.address)
      setPassword(json.user.password)
      setname(json.user.name)
      setreffer(json.user.reffercode)

    } else {
      alert(json.message)
    }
  }

  return (
    <context.Provider value={{contact,reffer,update, login, register,  getuser,email,password,setEmail,setPassword,address,setAddress,upi,setUpi,number,setnumber,name }}>
      {props.children}
    </context.Provider>
  )
}

export default State