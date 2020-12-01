import React, { Component } from "react";
import "./Tour.scss";
import {Link} from 'react-router-dom'

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info ">
          <h3>{city}</h3>
          <h5>{name}</h5>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
       <a href="#">
       <button type="button" className="btn btn-outline-primary mb-2" 
       style={{float:'right'}}><Link to="/Satara" >Book Now</Link></button>
       </a> 

      </article>
    );
  }
}
