import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel, Table, Container } from "react-materialize";
import './registration.css';
class Registration extends Component {
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
                    <div className="addreg">
                        <h1 className="font-bold font-setting">REGISTRATION</h1>
                    </div>
                </Carousel>

                <Container className="center container-1">
                    <h4>Registration details are as follows:</h4>
                    <h5>Conference Registration Fee:</h5>
                    <Table
                        centered={true}
                        hoverable={true}
                        striped={true}
                        className="hoverable"
                    >
                        <thead>
                            <tr>
                                <th data-field="event">Delegates</th>
                                <th data-field="date">Indian (INR)</th>
                                <th data-field="date">Internation (USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Students/Research Scholars</td>
                                <td>5000</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Faculty from Academics</td>
                                <td>8000</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td>Delegates from Industry</td>
                                <td>10000</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td>Attendee</td>
                                <td>3000</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h6>One additional paper per author/presenter shall be charged 3000 INR for participants
                from India and 100 USD for International participants.</h6>

                </Container>
                <Container className="center container-1">
                    <h5>Instruction for Registration:</h5>
                    <div className="text-left mx-8">
                        <p className="listhead">Please ensure the following points before submitting the camera-ready paper:</p>
                        <br />
                        <ol className="rulelist">
                            <li>
                                Modify the paper as per the reviewer’s comments. Also, prepare the author’s response to the reviewer’s comments.
                        </li>
                            <li>
                                Prepare the Camera Ready Copy of the manuscript strictly in AIS, Springer format.Please refer to the link
                        </li>
                            <li>
                                The maximum limit of the pages is 8.
                        </li>
                            <li>
                                The last date of registration is <span className="redColor">05 Feb 2021</span>. For the process of payment of registration fees using SBI collect, please click the             link.
                        </li>
                            <li>
                                After the payment of registration fees through SBI collect, please fill the registration form
                        </li>
                            <li>
                                At least one author need to register and present the paper. Without registration and oral presentation, paper will not be
                                included for publication.
                        </li>
                            <li>
                                After registration, please send the following file to <span className="redColor">ic4e2020@gmail.com </span>preferably in zip file
                    </li>
                        </ol>
                    </div>
                </Container>
                <div className="regfooter">
                </div>
            </div>

        );
    }
}

export default Registration;