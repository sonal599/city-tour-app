import React, { Component } from "react";
import "./Tour.scss";

import {Link} from 'react-router-dom'

export default class Place extends Component {
  

 
  render() {
    
      
        return (
          <article className="tour">
        <div className="img-container">
          <img src={this.props.img} alt="img" />
          
        </div>
        <div className="tour-info">
          <h3>{this.props.name}</h3>
          
          
        </div>
       

      </article>
         
        );
      
    
    
  
  }
}
