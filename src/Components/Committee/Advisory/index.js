import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
import "./advisory.css";
class Advisory extends Component {
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
                        <h1 className="font-bold font-setting">ADVISORY COMMITTEE</h1>
                    </div>
                </Carousel>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">INTERNATIONAL ADVISORY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">Prof. Chintha Tellambura, University of Alberta, Canada</li>
                            <li className="advitem"> Prof. Yeon Ho Chung, Pukyong National University, Busan, Korea (South)</li>
                            <li className="advitem"> Prof. Mihaela Albu, Politehnica University of Bucharest, Romania</li>
                            <li className="advitem"> Prof. Aimé Lay-Ekuakille, University of Salento, Lecce, Italy</li>
                            <li className="advitem"> Dr. Arokiaswami Alphones, NTU, Singapore</li>
                            <li className="advitem"> Prof. Eva Rajo-Iglesias, University Carlos III of Madrid, Spain</li>
                            <li className="advitem"> Dr. Imdad Rizvi, Higher Colleges of Technology, UAE.</li>
                        </ul>
                    </div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">NATIONAL ADVISORY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">   Prof. Rajeev Tripathi, MNNIT Allahabad</li>
                            <li className="advitem">   Prof. S S Pattnaik, NITTTR, Chandigarh</li>
                            <li className="advitem">   Dr. P K Khosla, C-DAC, Mohali, Chandigarh</li>
                            <li className="advitem">   Prof. K P Ray, DIAT, DRDO, Pune</li>
                            <li className="advitem">   Prof. Upena Dalal, SVNIT Surat</li>
                            <li className="advitem">   Prof. Nagendra Pathak, IIT Roorkee</li>
                            <li className="advitem">   Prof. P K Singhal, MITS, Gwalior</li>
                            <li className="advitem">   Prof. D. P. Sharma, Manipal University Jaipur</li>
                            <li className="advitem">   Prof. Shree Prakash Singh, NSTU Delhi</li>
                            <li className="advitem">   Prof. Brijendra Singh, Lucknow University</li>
                            <li className="advitem">   Prof. Somshekhar Bhat, MIT, Manipal </li>
                            <li className="advitem">   Prof G. Subramanya Nayak , MIT, Manipal </li>
                            <li className="advitem">   Prof M Sathish Kumar, MIT, Manipal </li>
                            <li className="advitem">   Prof Kumara Shama, MIT, Manipal</li>
                            <li className="advitem">   Prof. G R Mishra, Dr RML Avadh University, Ayodhya</li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Advisory;