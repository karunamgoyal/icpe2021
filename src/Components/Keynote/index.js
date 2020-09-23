import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel, Col, Row } from "react-materialize";
import "./keynote.css";
import CardKeynote from "./cards.js"

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
                                    src={"data:image/jpeg;base64,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"}
                                    title={"Prof. Chintha Tellambura"}
                                    designation={"University of Alberta, Canada"}
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