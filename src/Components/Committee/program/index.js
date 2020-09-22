import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel } from "react-materialize";
import "./advisory.css";
class Program extends Component {
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
                    <div className="advisoryaddfilter">
                        <h1 className="font-bold font-setting">TECHNICAL PROGRAM COMMITTEE</h1>
                    </div>
                </Carousel>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">TECHNICAL PROGRAM COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">Prof. Guy A. E. Vandenbosch, KU Leuven, Belgium</li>
                            <li className="advitem">  Dr. Ritu Sharma, MNIT, Jaipur</li>
                            <li className="advitem">  Dr. Ashok Kumar, NIT Hamirpur</li>
                            <li className="advitem">  Dr. Phayung Meesad, King Mongkut’s University of Technology North Bangkok, Thailand</li>
                            <li className="advitem">  Dr. Surinder Kumar Soni, NIT Hamirpur</li>
                            <li className="advitem">  Prof. Suman Lata Tripathi, LPU Jalandhar</li>
                            <li className="advitem">  Dr. Arvind Kumar, UIET Panjab University</li>
                            <li className="advitem">  Dr. Madhu Chetty, Federation University, Australia</li>
                            <li className="advitem">  Dr. Naresh Kumar, UIET Panjab University</li>
                            <li className="advitem">  Dr. Shilpi Gupta, SVNIT Surat</li>
                            <li className="advitem">  Dr. Rakesh Sharma, NIT Hamirpur</li>
                            <li className="advitem">  Dr Siddhaling Urolagin, BITS, Dubai</li>
                            <li className="advitem">  Dr. Sandeep Kumar, NIT Hamirpur</li>
                            <li className="advitem">  Dr. Gagnesh Kumar, NIT Hamirpur</li>
                            <li className="advitem">  Dr. Marcin Paprzycki, Polish Academy of Sciences, Poland</li>
                            <li className="advitem">  Dr. Parvin Kaushik, KIET Ghaziabad</li>
                            <li className="advitem">  Dr. Akhilesh Sharma, Manipal University Jaipur</li>
                            <li className="advitem">  Dr. Sarada Prasad, Old Dominion University, Virginia, USA</li>
                            <li className="advitem">  Dr. Jaume Anguera, Universitat Ramon Llull, Barcelona, Spain</li>
                            <li className="advitem">  Dr. Ravishankar Dudhe, MAHE, Dubai</li>
                            <li className="advitem">  Dr. Ramaprasad Poojari, MAHE, Dubai</li>
                            <li className="advitem">  Dr. Jagdish Nayak, BITS, Dubai</li>
                            <li className="advitem">  Dr. Pradeep Kumar, University of KwaZulu-Natal, South Africa</li>
                            <li className="advitem">  Dr. Khaled Mohamad Almustafa, Prince Sultan University, Saudi Arabia</li>
                            <li className="advitem">  Dr. Waralak V. Siricharoen, Silpakorn University, Thailand</li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Program;