import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
import "./advisory.css";
class Student extends Component {
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
                        <h1 className="font-bold font-setting">STUDENT COMMITTEE</h1>
                    </div>
                </Carousel>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">STUDENT COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem"> Mr. Balla Pawan Kumar (08978994402)</li>
                            <li className="advitem"> Mr. Rajat Garg (8077597698)</li>
                            <li className="advitem"> Mr. Karunam Goyal (8053144053)</li>
                            <li className="advitem"> Mr. Rahul Yadav (9992911119)</li>
                            <li className="advitem"> Ms. Megha Jana (08586052127)</li>
                            <li className="advitem"> Mr. Shivaji Kanojiya (09721973445)</li>
                            <li className="advitem"> Mr. Hari Pathania (07988154237)</li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Student;