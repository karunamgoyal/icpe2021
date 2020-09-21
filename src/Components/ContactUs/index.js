import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel,Row,Card,Col,Icon,CardTitle } from "react-materialize";
import './contactus.css'
class ContactUs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="add">
                        <h1 className="font-bold font-setting">CONTACT US</h1>
                    </div>
                </Carousel>
                <div className="container center hoverable">
                <h4 className="bold">Any Doubts We are All Ears</h4>
                <div className="contact">
                    <div className="name">Dr. N. P. Singh</div>
                    <div className="desig">Associate Prof, ECE Dept, NIT Kurukshetra</div>
                    <div className="phone">+91-9416412522</div>

                    <div className="name">Dr. Arvind Kumar</div>
                    <div className="desig">Associate Prof, ECE Dept, NIT Kurukshetra</div>
                    <div className="phone">+91-9466368417</div>
                </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;