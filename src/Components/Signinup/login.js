import React, { Component } from 'react'
import './Signinup.scss'
import logimg from '../../images/team.png'
import Navbar from '../../Components/Navbar/Navbar'
import {Link} from 'react-router-dom'
export class Login extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid  align-middle">
                    <div className=" container-fluid  cont float-left col-sm-auto rounded shadow-lg ">
                        <h2>Log In</h2><br />
                        <form id="form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary">Log In</button>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td scope="row" />
                                        <td><a href="signup-form.html" className="text-muted"><Link to="/Signup">Create an account?</Link></a></td>
                                        <td><a className="text-muted  " href="forgot-password.html">Forgot password?</a> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        <br />
                    </div>
                    <div className=" container-fluid  cont1 float-right col-sm-auto rounded   ">
                        <img src={logimg} className="rounded align-middle  img-fluid" width="auto" height="auto" alt="..." />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
