import React, { Component } from "react";
import "./Tour.scss";

import {Link} from 'react-router-dom'
import Place from './Place'

export default class Tour extends Component {
  
  state={
    data:[
      {
        name:"Mahalaxmi Temple",
        img:"",
        
        
    },
    {   
      name:"Panhala Fort",
      img:"/"

  },
  {
    name:"Rankala Lake",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Findia-kolhapur-rankala-lake-palace-sunset-dawn-silhouette-wallpaper-gtudz&psig=AOvVaw1u999mZN3vBVfTzACML_Gx&ust=1606641500571000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjjzKH0pO0CFQAAAAAdAAAAABAa/"
},
{
  name:"New Palace",
            img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickriver.com%2Fphotos%2Fkalpeshv%2F5160976914%2F&psig=AOvVaw1oJ4ynO01f62S9JZ6Y3N2O&ust=1606641663751000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjSh4H1pO0CFQAAAAAdAAAAABAD/"
        }
      
        
    ]
  }
 
  render() {
    
      
        return (
          <div>
             
          <div className="tourlist">
           
            {this.state.data.map(place => (
              <Place  name={place.name} img={place.img}/>
            ))}
            
          </div>
          <a href="#">
       <button type="button" className="btn btn-outline-primary " 
       style={{color: '#000', margin:"0 auto"}}><Link to="/Checkout">Book Tickets</Link></button>
       </a> 
          </div>
        );
      
    
    
  
  }
}
