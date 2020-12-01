import React, { Component } from 'react'
import img1 from '../../images/slider-img1.jpg'
import img2 from '../../images/slider-img2.jpg'
import img3 from '../../images/slider-img3.jpg'
import img4 from '../../images/slider-img4.jpg'
import img5 from '../../images/slider-img5.jpg'
import TourList from '../TourList'
import Footer from '../Footer/Footer'
 import {Link} from 'react-router-dom'
import "./Homepage.scss";
import Navbar from '../Navbar/Navbar'
import Comments from '../Comments/comments'


export class Homepage extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
        <div className="slider mb-0">
          <div className="container mb-4">
            <div className="bd-example">
              <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
                  <li data-target="#carouselExampleCaptions" data-slide-to="1" />
                  <li data-target="#carouselExampleCaptions" data-slide-to="2" />
                  <li data-target="#carouselExampleCaptions" data-slide-to="3" />
                  <li data-target="#carouselExampleCaptions" data-slide-to="4" />

                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 sliderimg" alt="..." />
                    <div className="carousel-caption d-none d-md-block trans">
                      <h3><u>Discover India With Us !</u></h3>
                      <p>It leaves you speechless, then turns you into storyteller.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="d-block w-100 sliderimg" alt="..." />
                    <div className="carousel-caption d-none d-md-block trans">
                    <h3><u>Adventure is Worthwhile !</u></h3>
                      <p>It leaves you speechless, then turns you into storyteller.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="d-block w-100 sliderimg" alt="..." />
                    <div className="carousel-caption d-none d-md-block trans">
                    <h3><u>How far one can go...!</u></h3>
                      <p>It leaves you speechless, then turns you into storyteller.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={img2} className="d-block w-100 sliderimg" alt="..." />
                  <div className="carousel-caption d-none d-md-block trans">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div><div className="carousel-item">
                  <img src={img5} className="d-block w-100 sliderimg" alt="..." />
                  <div className="carousel-caption d-none d-md-block trans">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
        <button type="button" class="btn btn-primary btn-lg mt-0 mb-0 "><Link to="/Homepage" style={{ color: '#fff' }}>Get Started Now</Link></button>
        </div>
        <TourList></TourList>
        <Comments></Comments>
        <Footer></Footer>
      </div>
    )
  }
}

export default Homepage
