import React from "react";
import "./AboutUs.scss";
import Navbar from '../Navbar/Navbar'

export default function AboutUs() {
    return (
      <div>
        <Navbar/>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      {/*---- Include the above in your HEAD tag --------*/}
      {/* Contact Us Section */}
      <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Section Titile */}
            <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
              <h1 className="section-title">Contact Us</h1>
            </div>
          </div>
          <div className="row">
            {/* Section Titile */}
            <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>
              <div className="find-widget">
                Company:  <a href="https://hostriver.ro">City Tour</a>
              </div>
              <div className="find-widget">
                Address: <a href="#">4435 Berkshire Circle Knoxville</a>
              </div>
              <div className="find-widget">
                Phone:  <a href="#">+ 879-890-9767</a>
              </div>
              <div className="find-widget">
                Website:  <a href="#">www.cityTour.com</a>
              </div>
              <div className="find-widget">
                Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
              </div>
            </div>
            {/* contact form */}
            <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
              <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                {/* Name */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">Name</label>
                  <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                  <div className="help-block with-errors" />
                </div>
                {/* email */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">Email</label>
                  <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                  <div className="help-block with-errors" />
                </div>
                
                {/* Message */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">Message</label>
                  <textarea className="form-control" rows={3} id="message" name="message" required data-error="Write your message" defaultValue={""} />
                  <div className="help-block with-errors" />
                  <button className="btn btn-outline-primary">Send a message</button>
                </div>
                {/* Form Submit */}
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}
