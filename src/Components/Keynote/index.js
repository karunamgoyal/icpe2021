import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel,Row,Card,Col,Icon,CardTitle } from "react-materialize";
import "./keynote.css";
import CardKeynote from "./cards.js"

class KeyNote extends Component {
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
                    <div className="keynoteaddfilter">
                        <h1 className="font-bold font-setting">KEYNOTE</h1>
                    </div>
                </Carousel>
                
                <div>
                    <div className="keynoteRow">
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Dr. Amit Bhardwaj"}
                                designation={` Assistant Professor
                                        Department of Electrical Engineering
                                        Indian Institute of Technology Jodhpur
                                        Jodhpur, Rajasthan, India
                                        Webpage: http://home.iitj.ac.in/~amitb/`}
                                description={`Amit Bhardwaj received his B.Tech degree in Electronics and Communication Engineering (ECE) in 2009 from YMCAIE Faridabad, Haryana, India, and master of engineering (M.E) degree in ECE in 2011 from Delhi College of Engineering, Delhi, India. In July 2011, he joined the department of Electrical Engineering (EE) at Indian Institute of Technology Bombay, Mumbai, India to pursue his Ph.D. degree, and got the degree in June 2016. From June 2016 - January 2017, he was a research associate in the department of Electrical Engineering at IIT Bombay, Mumbai. From February 2017- December 2017, he was an Alexander von Humboldt post-doctoral fellow at the Chair of Media Technology, Technical University of Munich, Germany. From February 2018- August 2019, he was a post-doctoral researcher at the Haptics and Virtual Reality (HVR) lab, Pohang University of Science and Technology (POSTECH), South Korea. Since September 2019, he has been an assistant professor at IIT Jodhpur in the department of Electrical Engineering. He is a co-author of the book "Kinesthetic Perception - A Machine Learning Approach" published by Springer(link). His research interests include data-driven haptic modeling and rendering, haptic perception, haptic data communication, signal processing, and applications of machine learning.`}
                            />
                        </div>
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Dr. Amit Bhardwaj"}
                                designation={` Assistant Professor
                                        Department of Electrical Engineering
                                        Indian Institute of Technology Jodhpur
                                        Jodhpur, Rajasthan, India
                                        Webpage: http://home.iitj.ac.in/~amitb/`}
                                description={`Amit Bhardwaj received his B.Tech degree in Electronics and Communication Engineering (ECE) in 2009 from YMCAIE Faridabad, Haryana, India, and master of engineering (M.E) degree in ECE in 2011 from Delhi College of Engineering, Delhi, India. In July 2011, he joined the department of Electrical Engineering (EE) at Indian Institute of Technology Bombay, Mumbai, India to pursue his Ph.D. degree, and got the degree in June 2016. From June 2016 - January 2017, he was a research associate in the department of Electrical Engineering at IIT Bombay, Mumbai. From February 2017- December 2017, he was an Alexander von Humboldt post-doctoral fellow at the Chair of Media Technology, Technical University of Munich, Germany. From February 2018- August 2019, he was a post-doctoral researcher at the Haptics and Virtual Reality (HVR) lab, Pohang University of Science and Technology (POSTECH), South Korea. Since September 2019, he has been an assistant professor at IIT Jodhpur in the department of Electrical Engineering. He is a co-author of the book "Kinesthetic Perception - A Machine Learning Approach" published by Springer(link). His research interests include data-driven haptic modeling and rendering, haptic perception, haptic data communication, signal processing, and applications of machine learning.`}
                            />
                        </div>
                    </div>
                    <div className="keynoteRow">
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Dr. Amit Bhardwaj"}
                                designation={` Assistant Professor
                                        Department of Electrical Engineering
                                        Indian Institute of Technology Jodhpur
                                        Jodhpur, Rajasthan, India
                                        Webpage: http://home.iitj.ac.in/~amitb/`}
                                description={`Amit Bhardwaj received his B.Tech degree in Electronics and Communication Engineering (ECE) in 2009 from YMCAIE Faridabad, Haryana, India, and master of engineering (M.E) degree in ECE in 2011 from Delhi College of Engineering, Delhi, India. In July 2011, he joined the department of Electrical Engineering (EE) at Indian Institute of Technology Bombay, Mumbai, India to pursue his Ph.D. degree, and got the degree in June 2016. From June 2016 - January 2017, he was a research associate in the department of Electrical Engineering at IIT Bombay, Mumbai. From February 2017- December 2017, he was an Alexander von Humboldt post-doctoral fellow at the Chair of Media Technology, Technical University of Munich, Germany. From February 2018- August 2019, he was a post-doctoral researcher at the Haptics and Virtual Reality (HVR) lab, Pohang University of Science and Technology (POSTECH), South Korea. Since September 2019, he has been an assistant professor at IIT Jodhpur in the department of Electrical Engineering. He is a co-author of the book "Kinesthetic Perception - A Machine Learning Approach" published by Springer(link). His research interests include data-driven haptic modeling and rendering, haptic perception, haptic data communication, signal processing, and applications of machine learning.`}
                            />
                        </div>
                        <div className="keynoteCard">
                            <CardKeynote
                                src={"https://ic4e2020.org/img/amit.jpg"}
                                title={"Dr. Amit Bhardwaj"}
                                designation={` Assistant Professor
                                        Department of Electrical Engineering
                                        Indian Institute of Technology Jodhpur
                                        Jodhpur, Rajasthan, India
                                        Webpage: http://home.iitj.ac.in/~amitb/`}
                                description={`Amit Bhardwaj received his B.Tech degree in Electronics and Communication Engineering (ECE) in 2009 from YMCAIE Faridabad, Haryana, India, and master of engineering (M.E) degree in ECE in 2011 from Delhi College of Engineering, Delhi, India. In July 2011, he joined the department of Electrical Engineering (EE) at Indian Institute of Technology Bombay, Mumbai, India to pursue his Ph.D. degree, and got the degree in June 2016. From June 2016 - January 2017, he was a research associate in the department of Electrical Engineering at IIT Bombay, Mumbai. From February 2017- December 2017, he was an Alexander von Humboldt post-doctoral fellow at the Chair of Media Technology, Technical University of Munich, Germany. From February 2018- August 2019, he was a post-doctoral researcher at the Haptics and Virtual Reality (HVR) lab, Pohang University of Science and Technology (POSTECH), South Korea. Since September 2019, he has been an assistant professor at IIT Jodhpur in the department of Electrical Engineering. He is a co-author of the book "Kinesthetic Perception - A Machine Learning Approach" published by Springer(link). His research interests include data-driven haptic modeling and rendering, haptic perception, haptic data communication, signal processing, and applications of machine learning.`}
                            />
                        </div>
                    </div>
                </div>
                <div className="h-64">
                </div>
            </div>
        );
    }
}

export default KeyNote;