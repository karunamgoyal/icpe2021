import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
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
                <div className="container container-1 center hoverable">
                <h4 className="bold">Please Contact Us in Case of any Doubt</h4>
                <h5 className="bold">Email: iccwc.21@gmail.com</h5>
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