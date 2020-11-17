import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel, Row, Col } from "react-materialize";
import "./howtoreach.css";

class HowTo extends Component {
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
                    <div className="howtofilter">
                        <h1 className="font-bold font-setting">HOW TO REACH</h1>
                    </div>
                </Carousel>
                <div className="container text-set container-2">
                    <h3 className="font-bold text-center heading-c">AIR CONNECTION</h3>
                    <div className="text-al">Kurukshetra does not have its own airport, but through a flight, you can reach Chandigarh (102 km) or Delhi (160 km) and take a cab/bus from there. To get more information on flights to and from chandigarh and delhi, please visit www.airindia.in for Air India and makemytrip for other carriers.</div>
                    <Row>
                        <Col
                            m={3}
                            s={8}
                            l={3}
                            offset="l3 m3 s1"
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14017.69280684109!2d77.086826!3d28.557052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48ebc8589e6367b8!2sIndira%20Gandhi%20International%20Airport%20Metro%20Station!5e0!3m2!1sen!2sin!4v1605651870842!5m2!1sen!2sin"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </Col>
                        <Col
                            m={3}
                            s={8}
                            l={3}
                            offset="s1"
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13727.339923254169!2d76.786311!3d30.666775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42c6835dc358b53a!2sChandigarh%20International%20Airport!5e0!3m2!1sen!2sin!4v1605651898139!5m2!1sen!2sin"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">RAIL CONNECTION</h3>
                    <div className="text-al">Kurukshetra city is well connected by Indian Railway to all the major cities of India. Kurukshetra is a junction on the Amritsar-Delhi railway line and can be easily reached via trains. To get the list of trains and their schedule, please visit www.indianrail.gov.in.</div>
                    <Row>
                        <Col
                            m={4}
                            s={8}
                            l={4}
                            offset="l4 m4 s1"
                        >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.247279719784!2d77.21908900000001!3d28.642892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8913afee1665916!2sNew%20Delhi%20Railway%20Station!5e0!3m2!1sen!2sin!4v1605651923223!5m2!1sen!2sin"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">ROAD CONNECTION</h3>
                    <div className="text-al">The Grand Trunk Road also called National Highway 1 runs through Kurukshetra which is 150 km off Delhi and 90 km south of Chandigarh. Buses are also easily available.</div>
                    <Row>
                        <Col
                            m={4}
                            s={8}
                            l={4}
                            offset="l4 m4 s1"
                        >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14002.918133024059!2d77.229127!3d28.667816000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ad30da21784cfb7!2sIsbt%20Kashmiri%20Gate!5e0!3m2!1sen!2sin!4v1605651953799!5m2!1sen!2sin"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </Col>
                    </Row>
                </div>
                <div className=" howtofooter">
                </div>
            </div>
        );
    }
}

export default HowTo;