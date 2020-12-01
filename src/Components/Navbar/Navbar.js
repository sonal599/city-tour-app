import React from "react";
import "./Navbar.scss";
import {Link} from 'react-router-dom'
import logo from '../logo.png'



export default function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
        <a className="navbar-brand" href="#">
          <img src={logo} width="80" height="80" className="d-inline-block align-top ml-4" alt="" />
          
      </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active ">
              <a className="nav-link " href="#">Features <span className="sr-only">(current)</span></a>
                 </li>
            <li className="nav-item active ">
              <a className="nav-link " href="#">Pricing <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Blog<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/AboutUs">About Us</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/ContactUs">Contact Us</Link></a>
            </li>
          </ul>
          <form className="form-inline nav-item">
                <a href="#"><button className="btn btn-outline-primary mr-3 btn-md"><Link to="/Login" 
                style={{ color: '#000' }}>Login</Link></button>
                </a>
                <a href="#"> <button className="btn btn-primary btn-md"><Link to='/Signup' 
                style={{ color: '#fff' }}>Create an account</Link></button>
                </a>
    
            </form>
        </div>
      </nav>
    
     
    </div>

    );
}