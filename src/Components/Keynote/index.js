import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel, Col, Row } from "react-materialize";
import "./keynote.css";
import CardKeynote from "./cards.js";
import prof from "./images/prof.png";
class KeyNote extends Component {
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
                    <div className="keynoteaddfilter">
                        <h1 className="font-bold font-setting">KEYNOTE SPEAKERS</h1>
                    </div>
                </Carousel>
                
                <div className="container container-2">
                    <Row>
                        <Col
                            m={3}
                            s={10}
                            l={3}
                            offset="l3 m3 s1"
                        >
                            <div className="keynoteCard">
                                <CardKeynote
                                    src={prof}
                                    title={"Prof. Yeon Ho Chung"}
                                    designation={"Pukyong National University Korea(South)"}
                                />
                            </div>             </Col>
                        <Col
                        m={3}
                        s={10}
                        l={3}
                        offset="s1"
                        >
                            <div className="keynoteCard">
                                <CardKeynote
                                    src={"https://i1.rgstatic.net/ii/profile.image/655677546573824-1533337117514_Q128/Jaume_Anguera2.jpg"}
                                    title={"Dr. Jaume Anguera"}
                                    designation={`Universitat Ramon Llull
                            Barcelona, Spain`}
                                />
                            </div>           </Col>
                    </Row>
                    <Row>
                        <Col
                        m={3}
                        s={10}
                        l={3}
                        offset="l3 m3 s1"
                        >
                            <div className="keynoteCard">
                                <CardKeynote
                                    src={"https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=s9wU0Q8AAAAJ&citpid=4"}
                                    title={"Prof. K P Ray"}
                                    designation={"Defence Institute of Advanced Technology(DIAT), Pune"}
                                />
                            </div>         </Col>
                        <Col
                        m={3}
                        s={10}
                        l={3}
                        offset="s1"
                        >
                            <div className="keynoteCard">
                                <CardKeynote
                                    src={"https://i1.rgstatic.net/ii/profile.image/272187902918703-1441906061757_Q512/Hemendra_Pandey.jpg"}
                                    title={"Dr. Hemendra Pandey"}
                                    designation={"Variable Energy Cyclotron Center, Kolkata"}
                                />
                            </div>      </Col>
                    </Row>
                </div>
                <div className="keyfooter">
                </div>
            </div>
        );
    }
}

export default KeyNote;