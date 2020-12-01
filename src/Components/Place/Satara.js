import React, { Component } from "react";
import "./Tour.scss";
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import Place from './Place'


export default class Tour extends Component {
  
  state={
    data:[
      {
        name:"Pratapgad Fort",
        img:"./img/images/satara2.jpg"
      },
      {
        name:"kaas Pathar",
        img:"./img/images/satara3.jpg"
      },
      {
        name:"Mahabaleshwar",
        img:"./img/images/satara4.jpg"
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
            <div>
              <button className="btn btn-outline-primary btn-lg  mt-3"style={{color: '#000'}} > <Link to="/Homepage">Go Back</Link></button>
            </div>
             <div className="text-center">
              <button type="button" className="btn btn-outline-primary btn-lg mt-3 mr-1" style={{color: '#000' }} >
               <Link to="/Checkout" >Book Tickets</Link></button>
              </div>
            
          </div>
          </div>
        );
      
    
    
  
  }
}
