import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import InfoCarousel from "./InfoCarousel/index";
import "./home.css";
import "./back.css"
import { Table } from 'react-materialize';
import Springer from '../Images/springer1.png'
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="w-screen h-screen">
                    <div className="w-screen h-screen absolute">
                        <div className="w-screen h-screen bg-cover absolute addhome"></div>
                    </div>
                    <div className="w-screen h-screen absolute">
                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto eventHeading font-bold">
                                ICCWC-2021
                            </h1>
                            <br />
                            <span className="eventName">
                                International Conference on Computational Electronics for Wireless Communications (ICCWC-2021)
                            </span>
                            <br />
                            <div className="homelocation">
                                June 11-12, 2021 <br />
                                National Institute of Technology,Kurukshetra
                            </div>
                        </div>
                    </div>
                    <div class="area" >
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div >
                </div>
                <div>
                    <h2 className="aboutHeading">
                        About ICCWC-2021
                    </h2>
                    <p className="aboutData text-justify">
                        The conference is concerned with the application of the latest computational technology to all aspects of Electronics Engineering and Wireless Communications. Computational technology encompasses both the latest hardware and software developments as well as algorithmic and theoretical developments. The conference is concerned with both theoretical, mathematical and scientific developments as well as applications of established technology to new domains. The purpose of holding this conference will aim at bringing together from around the world academics, researchers and practitioners to review recent achievements in the advancement of knowledge and understanding in these areas, share the latest developments, and address the challenges that the present and the future pose.
                        <br />
                        <br />
                    </p>
                </div>
                <div>
                    <InfoCarousel />
                </div>
                <div className="map">
                    <iframe title="NIT MAP" className="mapframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1166&amp;height=578&amp;hl=en&amp;q=National%20Institute%20of%20Technology,%20Kurukshetra%20kurukshetra+(National%20Institute%20of%20Technology,%20Kurukshetra)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=fdf226e91b73c9972541d5db6f957e965e925895'></script>
                </div>
                <div className="partners white-text center">
                    <div className="phead">Parteners</div>
                    <Table centered={true}
                    hoverable={true} className="container container-2">
                        <tbody>
                            <tr>
                                <td className="centered">
                                    <img className="springer-partner" alt="Springer" src={Springer}/><br/>Potential Partner
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Home;