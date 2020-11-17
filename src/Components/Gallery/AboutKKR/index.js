import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel,MediaBox,Row,Col} from "react-materialize";
import "./aboutkkr.css";
import i13 from '../../Images/nit1.jpg';
import i14 from '../../Images/ece.jpg';

class AboutKkr extends Component {
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
                    <div className="aboutkkrfilter">
                        <h1 className="font-bold font-setting">ABOUT NIT KURUKSHETRA</h1>
                    </div>
                </Carousel>
                <div className="container text-set container-2">
                <Row>
                <Col
                    m={6}
                    s={10}
                    l={6}
                    offset="l3 m3 s1"
                >
                <MediaBox
                id="MediaBox_7"
                options={{
                    inDuration: 275,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200
                }}
            >
                <img
                    alt="NIT"
                    src={i13}
                />
            </MediaBox>

                </Col>
            </Row>
            <div className="text-al">
                National Institute of Technology Kurukshetra, Haryana is a premier Technical Institute of the region. The institute started working as Regional Engineering College, Kurukshetra in 1963. Like other Regional Engineering Colleges of India this institution too, had been a joint enterprise of the State and Central Governments. This Institute was conferred upon status of Deemed University on June 26, 2002. Since then it has been renamed as National Institute of Technology, Kurukshetra. The Institute started functioning in its present campus at Kurukshetra in 1965-66 with 120 students admitted in the first year of the Five-Year Courses of study for the B.Sc. (Engg.) Degree in Civil, Electrical and Mechanical Engineering. The annual intake was increased to 250 students in 1966-67. B.Sc. (Engg.) degree courses in Electronics and Communication Engineering was added in 1971-72. in 1967-68 M. Sc. (Engg.) degree courses in Electronics and Communication Engineering was added in 1971-72. In 1967-68 M. Sc. (Engg.) degree courses in Civil, Electrical and Mechanical Engineering and in 1971-72, a Postgraduate diploma in Scientific instrumentation were also started. In July, 1976 Part-Time M. Sc. ( Engg.) degree courses in Electronics and Communication Engineering and instrumentation were started. The First registration for the degree of Doctor of Philosophy in the Faculty of Engineering and Technology was made in July, 1967.
                </div>
                </div>
                <div className="container text-set container-2">
                <Row>
                <Col
                    m={6}
                    s={10}
                    l={6}
                    offset="l3 m3 s1"
                >
                <MediaBox
                id="MediaBox_7"
                options={{
                    inDuration: 275,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200
                }}
            >
                <img
                    alt="NIT"
                    src={i14}
                />
            </MediaBox>

                </Col>
            </Row>
                <br/>
                <div className="text-al">
                The branch of Electronics and Communication Engineering was started in the year 1971 under the aegis of Electrical Engineering Department. The “Department of Electronics and Communication Engineering” came into existence in the year 1973. In 1987, Computer Engineering branch was also started and the department was renamed as “Electronics, Communication and Computer Engineering”. In 2003, the department was again renamed as “Electronics and Communication Engineering” because of inception of “Computer Engineering Department” separately. The department started M.Tech. program in ECE and VLSI design in the year of 1987 and 2007, respectively. Presently, M.Tech. (VLSI Design) is being offered by the School of VLSI Design and Embedded Systems independently.
                
                </div>
                </div>

                <div className=" kkrfooter">
                </div>
            </>
        );
    }
}

export default AboutKkr;