import React, { Component } from 'react';
import "../home.css";
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
                            <br/>
                            <br/>
                            Easy chair link for paper submission
                        </p>
                    </div>
                    <div className="col l4 m6 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            PUBLICATION
                        </h1>
                        <p className="infoData">
                            A proposal for publication of Conference Proceedings in Scopus indexed book series will be submitted to Springer Nature (in process)
                            <br/><br/>
                            Selected papers from ICCWC-2021 will be submitted for the publication in a Special Issue of Wireless Personal Communication (Springer Journal) after thorough review (in Process).
                        </p>
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