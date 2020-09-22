import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import "./committee.css";
import 'materialize-css';
import { Carousel} from "react-materialize";
import Card from "./cards.js";
class Committee extends Component {
    render() {
        return (
            <>
                <Navbar />
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
                        <h1 className="committeeHeading font-bold text-center">PATRON</h1>
                        <div className="cardOuter">
                            <Card className="cardInner" src={"http://nitkkr.ac.in/docs/director%20Sir.jpg"} name=" Padam Shri Dr. Satish Kumar," designation="Director, National Institute of Technology, Kurukshetra" />
                        </div>
                    </div>
                    <div className="organizingCommittee">
                        <h1 className="committeeHeading font-bold text-center">CO-PATRONS</h1>
                        <div className="chairPerson">
                            <div className="cardChair">
                                <Card src={"https://nitkkr.ac.in/admin/member_images/14948572152017-05-02-12-18-50-663%20-%20Copy.jpg"} name="Dr. Umesh Ghanekar" designation="Prof. ECE Department, National Institute of Technology, Kurukshetra" />
                            </div>
                            <div className="cardChair">
                                <Card src={"http://mnit.ac.in/PortalProfile/images/faculty/mnitjas060.png"} name="Dr. K. K. Sharma" designation="Prof. ECE Department, MNIT Jaipur" />
                            </div>
                            <div className="cardChair">
                                <Card src={"https://ece.nitk.ac.in/sites/default/files/ashv_0.png"} name="Dr. Ashvini Chaturvedi" designation="Prof. ECE Department, National Institute of Technology, Surathkal" />
                            </div>
                        </div>
                    </div>


                    <div className="organizingSecretary">
                        <h1 className="committeeHeading font-bold text-center">CHAIRPERSONS</h1>
                        <div className="chairPerson">
                            <div className="cardChair">
                                <Card src={"https://nitkkr.ac.in/admin/member_images/1494831879rp_17.jpg"} name="Dr. Rajoo Pandeye" designation="Prof. ECE Department , National Institute of Technology, Kurukshetra" />
                            </div>
                            <div className="cardChair">
                                <Card src={"https://nitkkr.ac.in/admin/member_images/1574853404IMG_20191127_165543.jpg"} name="Dr. N. P. Singh" designation="Associate Prof. ECE Department, National Institute of Technology, Kurukshetra" />
                            </div>
                        </div>
                    </div>
                    <div className="ChiefPatron">
                        <h1 className="committeeHeading font-bold text-center">ORGANIZING SECRETARY</h1>
                        <div className="cardOuter">
                            <Card className="cardInner" src={"https://nitkkr.ac.in/admin/member_images/akumar.png"} name=" Dr. Arvind Kumar" designation="Associate Prof. ECE Department, National Institute of Technology, Kurukshetra" />
                        </div>
                    </div>
                    <div className="organizingSecretary">
                        <h1 className="committeeHeading font-bold text-center">CONVENERS</h1>
                        <div className="chairPerson">
                            <div className="cardChair">
                                <Card src={"https://jaipur.manipal.edu/content/dam/manipal/muj/foe/images/profile/sanyog-rawat.jpg"} name="Dr. Sanyog Rawat" designation=" Manipal University Jaipur" />
                            </div>
                            <div className="cardChair">
                                <Card src={"https://manipal.edu/content/dam/manipal/mu/mit/images/profile/ECE/ASG_8087.JPG.transform/manipal-edu-transform-width-height-528px/image.jpg"} name="Dr. Pramod Kumar" designation=" MAHE, Manipal" />
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