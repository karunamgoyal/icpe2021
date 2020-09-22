import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel, Table,Container } from "react-materialize";
import './keydates.css';
class KeyDates extends Component {
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
                    <div className="addkey">
                        <h1 className="font-bold font-setting">KEY DATES</h1>
                    </div>
                </Carousel>
                <Container className="container-1">
                <Table
                    centered={true}
                    hoverable={true}
                    striped={true}
                    className="hoverable"
                >
                    <thead>
                        <tr>
                            <th data-field="event">Event</th>
                            <th data-field="date">Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Last date of paper submission:</td>
                            <td>05<sup>th</sup> February, 2021</td>
                        </tr>
                        <tr>
                            <td>Notification of paper acceptance:</td>
                            <td>20<sup>th</sup> March, 2021</td>
                        </tr>
                        <tr>
                            <td>Camera ready paper submission:</td>
                            <td>28<sup>th</sup> March, 2021</td>
                        </tr>
                        <tr>
                            <td>Last date of early bird registration:</td>
                            <td>15<sup>th</sup> April, 2021</td>
                        </tr>
                        <tr>
                            <td>Last date of registration:</td>
                            <td>28<sup>th</sup> April, 2021</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            </div>
        );
    }
}

export default KeyDates;