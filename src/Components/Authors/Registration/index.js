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
                                <th data-field="date">International (USD)</th>
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
                    <h6> Authors are requested to submit full length papers online through <a href="https://easychair.org/conferences/?conf=iccwc2021"> Easy Chair Link </a> </h6>
                    <h5>Paper Submission Guidlines</h5>
                            Papers must be submitted electronically in a single-column springer format (8 to max 10 pages), <a href="https://www.springer.com/us/authors-editors/conference-proceedings/conference-proceedings-guidelines">templates</a> ).
                            <br/>Submitted papers will undergo a double-blind peer-review process, coordinated by the Technical Program Committee.
                            <br/>Authors should consult <a href="ftp://ftp.springernature.com/cs-proceeding/svproc/guidelines/Springer_Guidelines_for_Authors_of_Proceedings.pdf">Springer’s authors’ guidelines</a> and use their proceedings templates, either for <a href="ftp://ftp.springernature.com/cs-proceeding/svproc/templates/ProcSci_TeX.zip">LaTeX</a> or for <a href="ftp://ftp.springernature.com/cs-proceeding/llncs/word/splnproc1703.zip">Word</a>, for the preparation of their papers.
                            <br/>Springer encourages authors to include their ORCIDs in their papers.<br/><br/>


                            Note for full paper submissions:
                            <ul>
                                <li>All papers must be submitted electronically in PDF and DOC format in the Springer style.</li>
                                <li>Although we accept submissions in the form of PDF, PS, and DOC/RTF files, you are strongly encouraged to generate a PDF version for your paper before submitting.</li>    
                            </ul>    
                </Container>
                
                <div className="regfooter">
                </div>
            </div>

        );
    }
}

export default Registration;