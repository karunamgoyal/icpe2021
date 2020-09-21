import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import { Carousel, Row, Card, Col, Icon, CardTitle } from "react-materialize";
import './authors.css';
class Authors extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="w-screen organizingHome">
                    <div className="w-screen absolute organizingHome">
                        <div className="w-screen organizingHome bg-cover absolute authaddfilter"></div>
                    </div>
                    <div className="w-screen organizingHome absolute">

                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto autheventHeading font-bold">
                                TRACKS
                        </h1>
                        </div>
                    </div>

                </div>
                <div>
                    <p className="authinfo">
                        Authors are invited to submit their latest original and unpublished research work/results in the following areas, but not limited to:
                    </p>

                    <div className="my-20">
                        <div className="authinfoouter">
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track1: RF & Microwave
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">Body Area Networks</li>
                                    <li className="authitem">              Unmanned Aerial Vehicle Networks </li>
                                    <li className="authitem">             Antenna Engineering</li>
                                    <li className="authitem">             Microwave Compatibility</li>
                                    <li className="authitem">         Electromagnetic Interference</li>
                                    <li className="authitem">        Cognitive Communications</li>
                                    <li className="authitem">        Electromagnetic remote sensing</li>
                                    <li className="authitem">         THz integrated circuits</li>
                                    <li className="authitem">             LTE and 5G Networks</li>
                                    <li className="authitem">             Software Defined Networks</li>
                                    <li className="authitem">              Internet of Things</li>
                                    <li className="authitem">                       Photonics</li>
                                    <li className="authitem">                       Radio Frequency Identification (RFID)</li>
                                    <li className="authitem">Micro & Millimeter wave circuits</li>
                                    <li className="authitem">               Microwave imaging</li>
                                </ul>
                            </div>
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track 2: Signal Processing
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">Signal Processing Algorithms and Architectures</li>
                                    <li className="authitem">Biomedical Signal Processing and Analysis</li>
                                    <li className="authitem">Analog and Mixed Signal Processing</li>
                                    <li className="authitem">Hardware Implementation for Signal Processing</li>
                                    <li className="authitem">Higher Order Spectral Analysis</li>
                                    <li className="authitem">Image and Multidimensional Signal Processing</li>
                                    <li className="authitem">Internet Signal Processing</li>
                                    <li className="authitem">Machine Learning for Signal Processing</li>
                                    <li className="authitem">Quantum Signal Processing</li>
                                    <li className="authitem">Signal Processing Over Graphs</li>
                                    <li className="authitem">Remote Sensing and Signal Processing</li>
                                    <li className="authitem">Sensor Array & Multichannel Signal Processing</li>
                                    <li className="authitem">Industrial Signal Processing</li>
                                    <li className="authitem">Signal Processing for Communication & Networking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="authinfoouter">
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track 3: Microelectronics
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">	VLSI Circuits and Systems</li>
                                    <li className="authitem">	RF Circuit Design and Testing</li>
                                    <li className="authitem">	Emerging Trends in VLSI</li>
                                    <li className="authitem">	Reconfigurable Systems</li>
                                    <li className="authitem">	System on Chip</li>
                                    <li className="authitem">	Heat Dissipation Analysis</li>
                                    <li className="authitem">	Design of MEMS Devices</li>
                                    <li className="authitem">	Optical MEMS Devices</li>
                                    <li className="authitem">	Nanotechnology</li>
                                    <li className="authitem">	Photovoltaics</li>
                                    <li className="authitem">	Analog / Mixed Signals</li>
                                    <li className="authitem">	RF Circuit Analysis</li>
                                    <li className="authitem">	Field Programmable Systems</li>
                                    <li className="authitem">	System Level Design</li>
                                    <li className="authitem">	Physical Design and Testing</li>
                                    <li className="authitem">	Power Awareness Analysis</li>
                                    <li className="authitem">	Design of NEMS Devices</li>
                                    <li className="authitem">	Electrical Packaging</li>
                                    <li className="authitem">	Thin film and devices</li>
                                </ul>
                            </div>
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track 4: Wireless Networks
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">    Future Internet Architectur</li>
                                    <li className="authitem">    Network Algorithms</li>
                                    <li className="authitem">    Network Control & Management</li>
                                    <li className="authitem">    Disaster Recovery of Networks</li>
                                    <li className="authitem">    Mobile Networks</li>
                                    <li className="authitem">    Ad hoc and Mesh Networks</li>
                                    <li className="authitem">    Named Data Networking</li>
                                    <li className="authitem">    Network Performance Analysis</li>
                                    <li className="authitem">    QoS for Emergency Applications</li>
                                    <li className="authitem">    Reconfigurable intelligent surfaces</li>
                                    <li className="authitem">    Real-time Systems and Networks</li>
                                    <li className="authitem">    Context and location-aware wireless services and applications</li>
                                    <li className="authitem">    User-centric networks and adaptive services</li>
                                    <li className="authitem">    Intelligent transportation systems</li>
                                    <li className="authitem">    Dynamic sensor networks for urban applications</li>
                                    <li className="authitem">    Wireless emergency and security systems</li>
                                    <li className="authitem">    Spectrum management</li>
                                    <li className="authitem">    Technologies, architectures for rural communications</li>
                                    <li className="authitem">    Satellite-based mobile access and backhaul</li>
                                    <li className="authitem">    Testbed and prototype implementation of wireless services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="authfooter">
                </div>
            </div >
        );
    }
}

export default Authors;