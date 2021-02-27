import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel, Table, Container } from "react-materialize";
import './registration.css';
import springer_temp from "../../docs/springer_template-ICCWC-2021.docx";
import consent from "../../docs/Consent_to_Publish-ICCWC 2021.docx";
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
                            <br />Submitted papers will undergo a double-blind peer-review process, coordinated by the Technical Program Committee.
                            <br />Authors should consult <a href="ftp://ftp.springernature.com/cs-proceeding/svproc/guidelines/Springer_Guidelines_for_Authors_of_Proceedings.pdf">Springer’s authors’ guidelines</a> and use their proceedings templates, either for <a href="ftp://ftp.springernature.com/cs-proceeding/svproc/templates/ProcSci_TeX.zip">LaTeX</a> or for <a href="ftp://ftp.springernature.com/cs-proceeding/llncs/word/splnproc1703.zip">Word</a>, for the preparation of their papers.
                            <br />Springer encourages authors to include their ORCIDs in their papers.<br /><br />


                            Note for full paper submissions:
                    <ul>
                        <li>All papers must be submitted electronically in PDF and DOC format in the Springer style.</li>
                        <li>Although we accept submissions in the form of PDF, PS, and DOC/RTF files, you are strongly encouraged to generate a PDF version for your paper before submitting.</li>
                    </ul>
                    <h5>Manuscript Preparation</h5>
                    The manuscript should be prepared in Springer format using MS WORD and/or LaTeX template available respectively in M S Word and LaTeX. The guidelines given here may help you to prepare the manuscript. Preferable format of manuscript is throgh LaTeX. You are advised to go through the Manuscript Guidelines and Checklist provided by Springer for a flawless representation of your work in the article.
                    <br/>The figures / graphs / plots in the manuscript MUST be of good resolution (600 dpi or more), tables MUST NOT be in pictorial format. Text in figures should not be too small, and preferably of equal size as text of the article.
                    <br/>Figures, text, or the tables MUST be visible within the boundary of the text area of the page and MUST NOT go beyond it.
                    <br/>Do NOT use any Social / Academic titles (e.g. Mr.,Ms.,Dr.,Prof. etc) preceding the author names. Do NOT mention the position of a person (e.g., research scholar, student, assistant professor, professor, IEEE member, IEEE student member etc.) in the affiliation.
                    <br/>Mention full address, affiliation, and email of ALL authors, specify a corresponding author with the corresponding e-mail ID. [Once an article is accepted, the publisher will send the proofreading of the article to this e-mail]
                    <br/>Do not make any page numbering and do not give any running head title.
                    <br/>Every article must bear a self-composed independent single paragraph as Abstract, which MUST NOT bear any citation or reference. Abstract MUST not have a section number.
                    <br/>Articles must be written in spell checked and grammatically correct English.
                    <br/>All references, figures, and tables should be numbered in sequence starting from 1 and MUST be duly cited / referred within the text.
                    <br/>Adhere to page size (A4 : 8.27"X11.69"), page margin size (top:2.05", bottom:2.05", left/inside: 1.73", right/outside: 1.73"), line spacing ( 'single' ), and font style ( 'Times' ), font sizes (Title: 14pt - bold, Abstract: 9 pt, Keywords: 9 pt, Section header : 12 pt - bold, Subsection header: 10 pt - bold, Table and figure caption: 10 pt - bold, Text body: 10 pt) as prescribed in Springer LNCS template, do not manually alter ANY of these parameters.
                    <br/>Deeply verify the referencing style of LNNS, which will help to produce correct reference format. A reference should bear the following parameters in proper format: author name(s), title of article/book, conference/journal name, volume, issue, page numbers, publication year.
                    <br/>Any article, not in format, will be subjected to rejection without any judgement on its quality.
                    <br/>The articles should be the own work of the authors. If any work is referred from others (or some other work by the author), proper acknowledgement should be given. Plagiarism of any type, if detected,will lead to rejection of the articles anytime.
                    <h5>Important Documents</h5>
                    <a href={springer_temp}>Springer Template for ICCWC-2021</a>
                    <br/><a href={consent}>Consent to Publish for ICCWC-2021</a>
                </Container>

                <div className="regfooter">
                </div>
            </div>

        );
    }
}

export default Registration;