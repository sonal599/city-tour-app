import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import Homepage from "./Components/Homepage/Homepage";
import Signup from './Components/Signinup/sign-up';
import Login from './Components/Signinup/login'
import AboutUs from "./Components/AboutUs/AboutUs";
import Satara from './Components/Place/Satara'
import Checkout from './Components/Checkout/Checkout'
import ContactUs from './Components/AboutUs/ContactUs'
class App extends Component {
  render() {
    return (
      <Router>
      <Route path="/Navbar" component={Navbar}></Route>
      <Route path="/"  exact component={Homepage}></Route>
      <Route path="/Signup" component={Signup}></Route>
      <Route path="/Login" component={Login}></Route>
      <Route path="/AboutUs" component={AboutUs}></Route>
      
        <Route path="/Satara" component={Satara}/>
        <Route path="/Checkout" component={Checkout}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Router>

    );
  }
}

export default App;
