import React, { Component } from 'react'
import img from '../../images/div2.png'
export class Comments extends Component {
    render() {
        return (
            <div className="container-fluid text-center cont2 " style={{background:'lightsalmon', margin: '20px 0px 0px 0px'
        }}>
                <img src={img} className="rounded float-left img-fluid" 
                width={350} height={300} alt="..." />
                <br />
                <h1 style={{ paddingTop: '80px' }}>"City Tour"</h1>
                <h3>“The system is easy to use and made our lives a lot easier. 
                Customers can book tours right away instead of sending emails & waiting for replies.”</h3>
                <br /><br />
                <h5>#feedback</h5>
            </div>
        )
    }
}

export default Comments
