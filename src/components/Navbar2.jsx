import React, { useEffect, useState } from 'react'
import './nav.css'
const Navbar = () => {


  const [displaynav, setdisplaynav] = useState(false)
  return (
    <>
      <div class="navbar">


        <div className='w70'>
          <div class="navbar-logo">
            <img src="/logo2.png" />
            <button onClick={() => { setdisplaynav(!displaynav) }} class="navbar-toggler none d-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={displaynav ? "open links" : "close links"}>
            <div className={displaynav ? "over-y" : "a-none over-y"}> <a className={window.location.pathname === '/' ? "active" : ""} href="/">Home</a></div>
            <div className={displaynav ? "over-y" : "a-none over-y"}>   <a href="/about" className={window.location.pathname === '/about' ? "active" : ""}>About</a></div>
            <div className={displaynav ? "over-y" : "a-none over-y"}>   <a href="/contact" className={window.location.pathname === '/contact' ? "active" : ""}>Contact Us</a></div>
            <div className={displaynav ? "over-y" : "a-none over-y"}>   <a href="/affiliate" className={window.location.pathname === '/affiliate' ? "active" : ""}>Affiliate</a></div>
            
          </div>
        </div>
        <div onClick={() => {
              localStorage.clear()
              window.location.reload()
            }} className={displaynav ? "downbutton " : " a-none over-y"}>  <a href="/" >Logout</a></div>
        <div className={displaynav ? "downbutton ml-0" : "a-none"}>  <a class="navbar-download ml-0" target='blank' href="https://drive.google.com/file/d/1w5onR2pC_tIYLJO-rTO-opNsaRTBg3gO/view">Download APP</a></div>

      </div>

    </>
  )
}

export default Navbar
