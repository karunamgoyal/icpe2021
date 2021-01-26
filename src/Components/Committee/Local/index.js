import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
import "./advisory.css";
class Local extends Component {
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
                        <h1 className="font-bold font-setting">LOCAL ORGANIZING AND PUBLICITY COMMITTEE</h1>
                    </div>
                </Carousel>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">LOCAL ORGANIZING AND PUBLICITY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem"> Dr. Mantos Biswas, CED NIT Kurukshetra (+91-9729364437)</li>
                            <li className="advitem"> Dr. Pradeep Kumar, EED NIT Kurukshetra</li>
                            <li className="advitem"> Dr. Shweta Meena, ECED NIT Kurukshetra (+91-7206393419)</li>
                            <li className="advitem"> Dr. Chhagan Charan, ECED NIT Kurukshetra (+91-8607283446)</li>
                            <li className="advitem"> Dr. Akhillesh Kumar Sharma, Manipal University Jaipur (+91-7987628589) </li>
                            <li className="advitem"> Dr. Sakar Gupta, Poornima College of Engineering Jaipur (+91-7014296337)</li>
                            <li className="advitem"> Mr. Sakar Gupta, Poornima College of Engineering Jaipur</li>
                            <li className="advitem"> Mr. Vishal Das, Manipal University Jaipur </li>
                            <li className="advitem"> Mr. Tapan Nahar, Manipal University Jaipur </li>
                            <li className="advitem"> Mr. Mohit Kumar Sharma, Manipal University Jaipur </li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Local;