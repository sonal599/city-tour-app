import React from "react";
import "./AboutUs.scss";
import Navbar from '../Navbar/Navbar'
export default function AboutUs() {
    return (
        /*<div className="f">
        <div className="About-Section">    
            <div className="Section-Name" ><h2>AboutUs</h2></div>  
            <div className="member">    
                <div className="member1">
                    <h2>Sandip Bhore</h2>
                    <ul>
                      
                        <li> <p id="user"> Number- 7204023921</p>    </li>
                        <li> <p id="user"> Email id- abc@gmail.com</p>    </li>
                        <li> <p  id="user"> Roll- Front End Developer</p>    </li>
                    </ul>
                </div>
        
                <div className="member1">
                    <h2>Harshwardhan Patil</h2>
                    <ul>
                        <li> <p id="user"> Number- 7058765755</p>    </li>
                        <li> <p id="user"> Email id- abc@gmail.com</p>    </li>
                        <li> <p  id="user"> Roll- Front End Developer</p>    </li>
                    </ul>
                </div>
        
                <div className="member1">
                    <h2>Sonali Patil</h2>
                    <ul>
                        <li> <p id="user"> Number- 9096921972</p>    </li>
                        <li> <p id="user"> Email id- abc@gmail.com</p>    </li>
                        <li> <p  id="user"> Roll- Front End Developer </p>    </li>
                    </ul>
                </div>
        
                <div className="member1">
                    <h2>Arbaj Shaikh</h2>
                    <ul>
                        <li> <p id="user"> Number- 7709997372</p>    </li>
                        <li> <p id="user"> Email id- abc@gmail.com</p>    </li>
                        <li> <p  id="user"> Roll- Front End Developer</p>    </li>
                    </ul>
                </div>
        </div>
        </div><br></br> 
        <div className="ContactUs-Section">
        <div className="Section-Name" ><h2>ContactUs</h2></div>
            <div className="SiteInfo">
            <p>&nbsp;</p>  <p><strong>Goa Office:</strong><br></br>
                            Plot No B/360, PDA Colony Off NH17,<br></br>
                            Near Club Estadia, Porvorim, Goa 403521<br></br>
                            Office Phone: 077987 22177<br></br>
                            Sales: +91 97692 03403</p>
                <p> email us at sales@vacationlabs.com!</p>
                <p>&nbsp;</p>
            </div>
        <div className="form">
                <form action="mailto:arbaajshaikh19@gmail.com" method="post" enctype="text/plain">
            Name:<br></br>
            <input className="box" type="text" name="name" size="50"></input><br></br>
            E-mail:<br></br>
            <input className="box" type="text" name="mail" size="50"></input><br></br>
            Message:<br></br>
            <input className="box1" type="text" name="comment" size="70" ></input><br></br><br></br>
            <input className="but" type="submit" value="Send"></input> <s></s><s></s>
            <input className="but" type="reset" value="Reset"></input>
            </form>	
            <p>&nbsp;</p>
        </div>
        </div>                           
        </div>*/
        <div>
            <Navbar/>
            <section id="what-we-do" className="pt-3 pb-0" style={{}}>
                <div className="container-fluid">
                    <h4 className="section-title  h3">What we do</h4>
                    
                    <div className="row mt-3">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-1">
                                    <h4 className="card-title">Our Love for Travel  </h4>
                                    <p className="card-text">Sure we’re a bunch of Developers, Designers, Writers, Managers and Thinkers. </p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right " /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-2">
                                    <h4 className="card-title"> Product</h4>
                                    <p className="card-text">We’ve made it our business to understand the travel business. </p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right " /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-3">
                                    <h4 className="card-title">Party Hard, Work Harder</h4>
                                    <p className="card-text">We party like crazy, but we know no bounds when we’re working. </p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-4">
                                    <h4 className="card-title">Engaging</h4>
                                    <p className="card-text">While many travel the world for inspiration, we find ours right here.</p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-5">
                                    <h4 className="card-title">How you do it</h4>
                                    <p className="card-text">We care for you and brings perfect product for you</p>
                                    <a href="" title="Read more" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-6">
                                    <h4 className="card-title">All over the world</h4>
                                    <p className="card-text">Our team is all over the world.</p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
