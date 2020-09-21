import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import "./committee.css";
import 'materialize-css';
import { Carousel,Container } from "react-materialize";
import Card from "./cards.js";
class Committee extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="caddfilter">
                        <h1 className="font-bold font-setting">ORGANIZING COMMITTEE</h1>
                    </div>
                </Carousel>
                
                <div>
                    <div className="ChiefPatron">
                        <h1 className="committeeHeading font-bold text-center">CHIEF PATRON</h1>
                        <div className="cardOuter">
                            <Card className="cardInner" src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                        </div>
                    </div>
                    <div className="ChiefPatron">
                        <h1 className="committeeHeading font-bold text-center">PATRON</h1>
                        <div className="cardOuter">
                            <Card className="cardInner" src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                        </div>
                    </div>

                    <div className="organizingCommittee">
                        <h1 className="committeeHeading font-bold text-center">ORGANIZING CHAIR(S)</h1>
                        <div className="chairPerson">
                            <div className="cardChair">
                                <Card  src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                            </div>
                            <div className="cardChair">
                                <Card  src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                            </div>
                            <div className="cardChair">
                                <Card  src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                            </div>
                        </div>
                    </div>

                    <div className="organizingSecretary">
                        <h1 className="committeeHeading font-bold text-center">ORGANIZING SECRETARY(S)</h1>
                        <div className="chairPerson">
                            <div className="cardChair">
                                <Card  src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                            </div>
                            <div className="cardChair">
                                <Card  src={"https://images.unsplash.com/photo-1516723338795-324c7c33f700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} name="Name" designation="Designation, National Institute of Technology, Kurukshetra" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-64 commfooter">
                </div>
            </>
        );
    }
}

export default Committee;