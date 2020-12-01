import React, { Component } from 'react'
import './Signinup.scss'
import logimg from '../../images/team.png'
import  Navbar from '../../Components/Navbar/Navbar'
import {Link} from 'react-router-dom' ;

export class Signup extends Component {
    render() {
        return (
            <div>
            <Navbar></Navbar>
                <div className="container-fluid  align-middle">
                    <div className=" container-fluid  cont float-left col-sm-auto rounded shadow-lg ">
                        <h2>Create an account</h2><br />
                        <form id="form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Working Email</label>
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"> Create Password</label>
                                <input type="password" className="form-control" id="pass" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"> confirm Password</label>
                                <input type="password" className="form-control" id="pass1" />
                            </div>
                            <button type="submit" className="btn btn-block btn-primary" id="but">Sign up</button>
                            <div>
                                <br />
                                <a href="login-form.html" className="text-muted"><Link to="/Login">Already have an account?</Link></a>
                            </div>
                        </form>
                        <br />
                    </div>
                    <div className=" container-fluid  cont1 float-right col-sm-auto rounded   ">
                        <img src={logimg}className="rounded align-middle  img-fluid" width="auto" height="auto" alt="..." />
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
