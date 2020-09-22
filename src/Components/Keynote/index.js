import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
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
                        <h1 className="font-bold font-setting">KEYNOTE</h1>
                    </div>
                </Carousel>
                
                <div>
                    <div className="keynoteRow">
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://i1.rgstatic.net/ii/profile.image/655677546573824-1533337117514_Q128/Jaume_Anguera2.jpg"}
                                title={"Dr. Jaume Anguera"}
                                designation={`Universitat Ramon Llull
                                Barcelona, Spain`}
                            />
                        </div>
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Prof. Chintha Tellambur"}
                                designation={"University of Alberta, Canada"}
                            />
                        </div>
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Dr. Hemendra Pandey"}
                                designation={"Variable Enegry Cyclotron Center, Kolkata"}
                            />
                        </div>
                    </div>
                    <div className="keynoteRow">
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Dr. Jaume Anguera"}
                                designation={"Universitat Ramon Liull Barcelona, Spain"}
                            />
                        </div>
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Prof. K P Ray"}
                                designation={"DIAT (DRDO), Pune"}
                            />
                        </div>
                    </div>
                </div>
                <div className="keyfooter">
                </div>
            </div>
        );
    }
}

export default KeyNote;