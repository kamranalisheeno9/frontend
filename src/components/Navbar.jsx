import React, { useEffect, useState } from 'react'
import './nav.css'
import Logo from '../assets/Logo/logo_updated.png'
const Navbar = () => {


  const [displaynav, setdisplaynav] = useState(false)
  return (
    <>
      <div class="navbar">


        <div className='w70'>
          <div class="navbar-logo">
            <img src={Logo} />
            <button onClick={() => { setdisplaynav(!displaynav) }} class="navbar-toggler none d-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={displaynav?"open links":"close links"}>
          <div className={displaynav?"over-y":"a-none over-y"}> <a className={window.location.pathname === '/' ? "active" : ""} href="/">Home</a></div>
          <div className={displaynav?"over-y":"a-none over-y"}>   <a href="/about" className={window.location.pathname === '/about' ? "active" : ""}>About Us</a></div>
          <div className={displaynav?"over-y":"a-none over-y"}>   <a href="/contact" className={window.location.pathname === '/contact' ? "active" : ""}>Contact Us</a></div>
          <div className={displaynav?"over-y":"a-none over-y"}>  <a href="/register" className={window.location.pathname === '/register' ? "active" : ""}>Register</a></div>
          </div>
        </div>
        <div  className={displaynav?"downbutton":"a-none"}>  <a class="navbar-download" target='blank' href="https://play.google.com/store/apps/details?id=com.company.expensedeck">Download APP</a></div>

      </div>

    </>
  )
}

export default Navbar
