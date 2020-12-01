import React, { Component } from "react";
import './Checkout.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'


export default class Tour extends Component {
  
  
 
  render() {
    
      
        return (
         <div>
           <Navbar></Navbar>

           <div>
        <h1 style={{textAlign: 'center'}}>Booking Details and Checkout</h1>
        <div className="Fields">
          <div>
            <div className="formContainer">
              <form>
                <div className="Fields">
                  
                  <div>
                    <h3>Payment</h3>
                    
                    <label htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" />
                    <div className="Fields">
                      <div>
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" />
                      </div>
                      <div>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" />
                      </div>
                    </div>
                  </div>
                </div><input onClick={()=>{alert("Tickets Booked Successfully..! Thank You.")}} type="submit" defaultValue="Continue to checkout" className="checkout" />
              </form>
            </div>
          </div>
          <div>
            <div className="formContainer">
              <h4>
                Tickets: <span className="price" style={{color: 'black'}}><b>2</b></span>
              </h4>
              
              <p>
                Total Cost : <span className="price" style={{color: 'black'}}><b> 2000 Rs </b></span>
              </p>
            </div>
          </div>
        </div>
      </div>



           <Footer></Footer>
         </div>
        );
      
    
    
  
  }
}





