import React, { Component } from 'react';
import "../home.css";
import 'materialize-css';
import { Table } from 'react-materialize';
import Springer from '../../Images/lecture.jpg'

class InfoCarousel extends Component {
    render() {
        return (
            <>

                <div className="infoouter">
                    <div className="col l4 m6 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            SUBMISSION
                        </h1>
                        <p className="infoData">
                            Paper submissions are invited in the area of Electronics and Wireless Communication Systems.
                            <br />
                            <br />
                            Easy chair link for paper submission <a
                            href="https://easychair.org/conferences/?conf=iccwc2021"
                            className="black pulsate" id="textElement">https://easychair.org/conferences/?conf=iccwc2021</a><br />
                            <h5>Paper Submission Guidlines</h5>
                            Papers must be submitted electronically in a single-column springer format (8 to max 10 pages), <a id="infoc" href="https://www.springer.com/us/authors-editors/conference-proceedings/conference-proceedings-guidelines">templates</a> ).
                            <br/>Submitted papers will undergo a double-blind peer-review process, coordinated by the Technical Program Committee.
                            <br/>Authors should consult <a id="infoc" href="ftp://ftp.springernature.com/cs-proceeding/svproc/guidelines/Springer_Guidelines_for_Authors_of_Proceedings.pdf">Springer’s authors’ guidelines</a> and use their proceedings templates, either for <a id="infoc" href="ftp://ftp.springernature.com/cs-proceeding/svproc/templates/ProcSci_TeX.zip">LaTeX</a> or for <a id="infoc" href="ftp://ftp.springernature.com/cs-proceeding/llncs/word/splnproc1703.zip">Word</a>, for the preparation of their papers.
                            <br/>Springer encourages authors to include their ORCIDs in their papers.<br/><br/>


                            Note for full paper submissions:
                            <ul>
                                <li>All papers must be submitted electronically in PDF and DOC format in the Springer style.</li>
                                <li>Although we accept submissions in the form of PDF, PS, and DOC/RTF files, you are strongly encouraged to generate a PDF version for your paper before submitting.</li>    
                            </ul>
                        </p>
                    </div>
                    <div className="col l4 m6 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            PUBLICATION
                        </h1>
                        <p className="infoData">
                        Proceedings of ICCWC 2021 will be published in scopus indexed book series: “Lecture Notes in Networks and Systems”
                            <br /><br />
                            Selected papers from ICCWC-2021 will be submitted for the publication in a Special Issue of Wireless Personal Communication (Springer Journal) after thorough review.
                        </p>
                        <Table centered={true}
                         className="container container-2">
                        <tbody>
                            <tr>
                                <td className="centered">
                                    <img alt="Springer-Book" src={Springer}/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    <div className="col l4 m12 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            KEYDATES
                        </h1>
                        <ul className="list-disc infoData">
                            <li className="listDate"> Last date of paper submission: 05th February, 2021</li>
                            <li className="listDate">Notification of paper acceptance: 20th March, 2021</li>
                            <li className="listDate">Camera ready paper submission: 28th March, 2021</li>
                            <li className="listDate">Last date of early bird registration: 15th April, 2021</li>
                            <li className="listDate">Last date of registration: 28th April, 2021</li>
                        </ul>
                    </div>

                </div>
            </>
        );
    }
}

export default InfoCarousel;