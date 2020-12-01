import React, { Component } from "react";
import "./Tour.scss";
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import Place from './Place'


export default class Tour extends Component {
  
  state={
    data:[
      {
        name:"Hampi",
        img:"./img/images/Karnataka4.jpg"
      },
      {
        name:"Mysuru",
        img:"./img/images/Karnataka3.jpg"
      },
      {
        name:"Murudeshwar",
        img:"./img/images/Karnataka2.jpg"
      }
    ]
  
  
  
  }
 
  render() {
    
      
        return (
          <div><Navbar/>
          <div className="tourlist">
            
            {this.state.data.map(place => (
              <Place  name={place.name} img={place.img}/>
            ))}
            <a href="#">
       <button type="button" className="btn btn-outline-primary " 
       style={{color: '#000', margin:"0 auto"}}><Link to="/Checkout">Book Tickets</Link></button>
       </a>
          </div>
          </div>
        );
      
    
    
  
  }
}
