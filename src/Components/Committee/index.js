import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import "./committee.css";
import 'materialize-css';
import { Carousel, Row, Col } from "react-materialize";
import Card from "./cards.js";
import avatar from "../Images/akumar.png"
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
                <div class="container center">
                    <h3 className="font-bold text-center heading-c">PATRON</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l4 m4"
                        >
                            <Card className="cardInner" src={"http://nitkkr.ac.in/docs/director%20Sir.jpg"} name="Padam Shri Dr. Satish Kumar"  designation="Director"  department="NIT, Kurukshetra" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">CO-PATRONS</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://nitkkr.ac.in/admin/member_images/14948572152017-05-02-12-18-50-663%20-%20Copy.jpg"} name="Dr. Umesh Ghanekar" designation="Professor" department="ECE Department" institute="NIT, Kurukshetra" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://media-exp1.licdn.com/dms/image/C4E03AQFj3W80qUi23w/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=NLfqlhbWdC6JZmb8IBu1GNvwvnrouL5I75iWtNsPEjs"} name="Dr. K. K. Sharma" designation="Professor" department="ECE Department" institute="MNIT Jaipur" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://i1.rgstatic.net/ii/profile.image/385824081367043-1468999037967_Q128/Ashvini_Chaturvedi.jpg"} name="Dr. Ashvini Chaturvedi" designation="Professor" department="ECE Department" institute="NIT Surathkal" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">CHAIRPERSONS</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l2 m2"
                        >
                            <Card src={"https://nitkkr.ac.in/admin/member_images/1494831879rp_17.jpg"} name="Dr. Rajoo Pandeye" designation="Professor" department="ECE Department" institute="NIT, Kurukshetra"/>
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://nitkkr.ac.in/admin/member_images/1574853404IMG_20191127_165543.jpg"} name="Dr. N. P. Singh" designation="Associate Professor" department="HoD ECE Department" institute="NIT, Kurukshetra" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">ORGANIZING SECRETARY</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l4 m4"
                        >
                            <Card className="cardInner" src={avatar} name="Dr. Arvind Kumar" designation="Associate Professor" department="ECE Department" institute="NIT, Kurukshetra" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">CONVENERS</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l2 m2"
                        >
                            <Card src={"https://jaipur.manipal.edu/content/dam/manipal/muj/foe/images/profile/sanyog-rawat.jpg"} name="Dr. Sanyog Rawat" designation="Associate Professor" department="ECE Department" institute="Manipal University, Jaipur" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://manipal.edu/content/dam/manipal/mu/mit/images/profile/ECE/ASG_8087.JPG.transform/manipal-edu-transform-width-height-528px/image.jpg"} name="Dr. Pramod Kumar" designation="Associate Professor" department="ECE Department" institute="MIT (MAHE), Manipal"/>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Committee;

