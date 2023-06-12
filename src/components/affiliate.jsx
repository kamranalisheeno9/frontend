import React, { useContext, useEffect, useState } from "react";
import './signup.css'
import context from "../context/context";
import { FacebookShareButton, WhatsappShareButton,TwitterShareButton,EmailShareButton } from 'react-share';
function RegistrationForm() {
  const a = useContext(context)
  const update = a.update
  const number = a.number
  const upi = a.upi
  const password = a.password
  const name = a.name
  const setPassword = a.setPassword
  const setAddress = a.setAddress
  const setnumber = a.setnumber
  const getuser = a.getuser
  const setUpi = a.setUpi
  const setEmail = a.setEmail
  const email = a.email
  const address = a.address
  const reffer = a.reffer


  useEffect(() => {
    getuser()
  }, [])

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

  const handleSubmit = (event) => {
    event.preventDefault();
    update({ number, email, upi, email, upi, address, password })
  };
  const mail = () => {

  }
  const shareOnTwitter = () => {
    const tweetText = `Check out my referral code: ${reffer}`;
    const tweetUrl = `https://www.moiz.com`;
    const tweetMediaUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(tweetUrl)}&text=${encodeURIComponent(tweetText)}&media=${encodeURIComponent(tweetMediaUrl)}`);
  };


  return (
    <div className="signup">
      <h1 className="text-center my-3 mt-5">Welcome {name}!</h1>
      <h5 className="text-center">Your Reward details will be sent to you by your Email</h5>

      <form onSubmit={handleSubmit}>
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
          <input type="text" value={password} onChange={handlePasswordChange} required />
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
        <br />
        <button type="submit">Update</button>
      </form>
      <div className="share text-center my-5">
        <h1>Your Reffer Code is {reffer} <i onClick={(event) => {
          event.preventDefault();
          navigator.clipboard.writeText(reffer)
          alert("Copied successfully")
        }} className="copy fa-solid fa-copy "></i></h1>
        <h3 className="mt-5">Share and start earning</h3>

        <div className="icons">
          <EmailShareButton url={`https://paisamonitor.vercel.app/register?refer=${reffer}`} subject="Paisa Monitor Invite" body={`Make money in Paisamonitor by using my Refferal Code ${reffer}`}>

          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABZCAMAAAAzQUv+AAAA6lBMVEX////qQzVChfQ0qFPFIh/7vAQ0f/T5+/8ipEj5/Pn8wAP/vQDqQTPBAAD7uAD7ugDqPCzpNiX98fDoKBDpMBzGIRv75OP50M7taWDLFwAlp1XvgXr1trPEFhLznZjoHgDsXVLIHQ2xPmHtZFr3w8B7rkbylY+RW57629nveHHrSz/rUUbwiIFsnPbourrXgYHMSUfINDHSa2rgoqH+9uX93aH8zGX8xED80X395bjbi4vSY2H81oz+7c3dlZXNWFf8xlNqdNDduSGxtDa4Nk/BKjOrQGhnuXqowPeh0awid/MGoDuDqfd4v4hnbz7oAAADpklEQVRoge3aaXeaQBQG4AtComFQUFCToCaNTc3SJG2zL23tlq39/3+nA2443DugDCdfvB8F5jnz5j2jMQEYz8npmW98+vylCUXM+cWlaZpX1zeV+ddvbbvjG4bRse079fL5ZbVmhlOrVu9jcsuwjel07K+K2YuxGk3VfJi8fmL7Rnzsu7pClW/WnJvqzehCyzaE6fgtZeyDWTOFqUY7rvu+6Bq+sqzvq6IaTvgzvk1sN8r6m4qsz7+jbPWaX0NZnrWRP2sk4zFc4aXCXZ51NyfbJdSoWqcdwjUMr50n63rb26Dc2jWcJVs1Gc1xls+65Tga6ZpXQKrc1Vhj2ay7DaZJXFPuatpyWfOMw4dzuEtlHWac19WYt2jWXY9p+V1NcxfKut52Jw/mdBfKepKxCldjvaxZd3tMU+fyXu9lybq+58UfUuBqDkvPusUcTbXLe72fwu57TFPv8l7vyLKu77jiAzJ3U3I+i+N4dNYtz0ncT7sWDI3dzC4/r6ms9xsseTvlWuZ70PV3m5ldqtdCj1Nc60dpi7v6ByJrbCl+hvQTbN9JZky71s+tUil09WEHffNH10J6neixzOUZc3bk6vovLGt8MbHXSI8lbphxaeaiWVPL8V7Psu4jPSZdK8o47urD34lek+vFeo32mHLHGc+5SK/pBXmvo6zrO2iPCXeSseAmspYtGfWa6jHuTjMWXX3o72Z2Nea2XUnGohvLOOEKWcsX5XLaDRt4xog7l3XasqmzgWeMuXrsvFbmChmjrq7/2VTsihkT7jRrRW4iY8rl5/WuMteyEhmT7rjXKlwsY4kbZZ3ftdCMZW54XivYL5qx1OW9buRkXSLjFFcPeqknkmRYLyhTqtRdgyaTn/uycVgTlnTXAQ6ojzBpm/UOACrLuxCkvefgrBtAPhcGh+THJ3LcwwHkdXnWi/a6cTB6MKcLi/Wa9xjUuNBcIGv3cPq9eW4XYDtjr5m3PXtIgQtBJph5Aah1oXmUnrV7NADVLs86rdeN7fkHFLkQyH434L9DBFCMK+11rMfKXYBjol7MO07erNDl5zX2FuW4YsaqXbTX7hH6NzalLtJrsccFuUKvkz0uyp3Lmsi4EHfWa7THBbrQj2DmJb9UKtaNzhDkrCjc5b3uET0u2IVByvWi3LRZuSt35a7clbtyM7sf38R9hKe1N3DLz7D+8gbuawXoDRfn8u3y+UvAhbnlf6PrTy+oXJBbfn2e3LD+hLW6GPfxOfpHxv8oOH4dVWny8gAAAABJRU5ErkJggg==" alt="" />
          </EmailShareButton>

          <WhatsappShareButton url={`https://paisamonitor.vercel.app/register?refer=${reffer}`} title={`Make money in Paisamonitor by using my Refferal Code ${reffer}`} >

            <img src="/whatsapp.png" alt="" />
          </WhatsappShareButton>
          <FacebookShareButton url={`https://paisamonitor.vercel.app/register?refer=${reffer}`} title={`Make money in Paisamonitor by using my Refferal Code ${reffer}`} quote={`Make money in Paisamonitor by using my Refferal Code ${reffer}`}hashtag="#paisamonitor" >

            <img className="mx-1" style={{ width: "60px" }} src="/facebook.jpg" alt="" />
          </FacebookShareButton>
          <TwitterShareButton url={`https://paisamonitor.vercel.app/register?refer=${reffer}`} title={`Make money in Paisamonitor by using my Refferal Code ${reffer}`}>

            <img  src="/twitter.png" alt="" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
