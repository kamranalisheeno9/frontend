import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
    
    <div class="container-fluid footer bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="container text-center py-5">
            <div class="d-flex justify-content-center mb-4">
                <a class="btn btn-light btn-social mr-2"  target='blank' href="https://web.facebook.com/paisamonitor/"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-light btn-social mr-2" target='blank' href="https://web.facebook.com/paisamonitor/"><i style={{paddingRight: "1px"}} class="fab fa-facebook-f"></i></a>
                <a class="btn btn-light btn-social mr-2" target='blank' href="https://www.linkedin.com/company/paisa-monitor/"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-light btn-social" target='blank' href="https://www.instagram.com/paisa.monitor/"><i class="fab fa-instagram"></i></a>
            </div>
            <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#">PaisaMonitor</a>. All Rights Reserved. 
            </p>
        </div>
    </div>
    </>
  )
}

export default Footer