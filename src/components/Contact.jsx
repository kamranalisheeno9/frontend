import React, { useState } from 'react';
const myemail = 'moiz23032194@gmail.com'
const mypass = 'lebblkiqdcheeuxy'
const host = "https://ganesh-production.up.railway.app"

function Contact() {


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [message, setmessage] = useState('')
    const sendmsg = async (data) => {
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
            const successDiv = document.querySelector("#success");
            successDiv.innerHTML = `<div class="alert alert-success"><strong>Your message has been sent. </strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
            
            const sendMessageButton = document.querySelector("#sendMessageButton");
            sendMessageButton.disabled = false;
            setname("")
            setemail("")
            setmessage("")
            setnumber("")
        } else {
            const successDiv = document.querySelector("#success");
            successDiv.innerHTML = `<div class="alert alert-danger"><strong>Sorry ${name}, it seems that our mail server is not responding. Please try again later!</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
            // document.querySelector("#contactForm").reset();
            const sendMessageButton = document.querySelector("#sendMessageButton");
            sendMessageButton.disabled = false;
        }
    }
    async function handleFormSubmit(event) {
        event.preventDefault();
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            const successDiv = document.querySelector("#success");

            successDiv.innerHTML = `<div class="alert alert-danger"><strong>Hey ${name}, Please enter all required fields</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
            return;
        }

        const sendMessageButton = document.querySelector("#sendMessageButton");
        sendMessageButton.disabled = true;

        sendmsg({ name, email, number, msg: message })

    }

    return (
        <div className="container-fluid py-5" id="contact">
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" >Contact</h1>
                    <h1 className="position-absolute text-uppercase " style={{color:"#525252"}}>Contact Us</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form text-center">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" >
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <input type="text" className="form-control p-4" id="name" placeholder="Name"
                                            required data-validation-required-message="Please enter your name"
                                            onChange={(e) => setname(e.target.value)} value={name} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <input type="email" className="form-control p-4" id="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} value={email}
                                            required data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <input type="number" className="form-control p-4" id="subject" placeholder="Contact no."
                                        required data-validation-required-message="Please enter a Number"
                                        onChange={(e) => setnumber(e.target.value)} value={number} />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Type here"
                                        required
                                        onChange={(e) => setmessage(e.target.value)} value={message}
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button onClick={(e) => handleFormSubmit(e)} type="submit" className="btn btn-outline-primary" id="sendMessageButton">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact