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
                            <li className="advitem">  Dr. Sanjeev Tyagi, IET MJP Rohilkhand University, Bareilly</li>
                            <li className="advitem">  Dr. S. S. Saini, CSIR-CSIO Chandigarh</li>
                            <li className="advitem"> Dr. Chitresh Nayak, Oriental Institute of Science and Technology, Bhopal </li>
                            <li className="advitem"> Dr. Yogita, NIT Meghalaya</li>
                            <li className="advitem"> Dr Ashwani Kumar Yadav, Amity University Rajasthan, Jaipur</li>
                            <li className="advitem"> Mrs. Parul Pathak, JECRC University, Jaipur</li>
                            <li className="advitem"> Dr. Vipin Pal, NIT Meghalaya </li>
                            <li className="advitem"> Dr. Sandeep Kumar, NIT Surathkal </li>
                            <li className="advitem"> Dr. Archek Praveen Kumar, Malla Reddy College of Engineering for Women, Hyderabad</li>
                            <li className="advitem">Dr. Garima Saini, NITTTR Chandigarh</li>
                            <li className="advitem">Prof. Asheesh K. Singh, MNNIT, Allahabad</li>  

                            <li className="advitem">Prof. Manish Rai, IET MJPRU Bareilly</li>

                            <li className="advitem">Dr. Balwinder Raj, NITTTR Chandigarh</li>

                            <li className="advitem">Dr Ujjawal Verma, MIT, Manipal </li>

                            <li className="advitem">Dr Tanweer, MIT, Manipal </li>

                            <li className="advitem">Dr Shounak De, MIT, Manipal </li>

                            <li className="advitem">Dr Vinod Kumar Joshi, MIT, Manipal </li> 

                            <li className="advitem">Dr Shailendra Kumar Tiwari, MIT, Manipal </li> 

                            <li className="advitem">Dr Shilpam Saxena, LNCT, Bhopal </li>

                            <li className="advitem">Dr. Ajay Kumar Maurya, UNSIET, Jaunpur </li> 

                            <li className="advitem">Dr. Mandeep Singh, NITK, Surathkal </li>

                            <li className="advitem">Dr Kumar Abhishek,NIT Patna </li>

                            <li className="advitem">Dr Prashant Kumar, IIT Patna </li>

                            <li className="advitem">Dr Sudeep P V, NIT Calicut </li>

                            <li className="advitem">Dr Surendra Sriwas, BIET, Jhansi </li>

                            <li className="advitem">Prof. Manish Tiwari, Manipal University Jaipur </li>

                            <li className="advitem">Prof. Sumit Srivastava, Manipal University Jaipur </li>

                            <li className="advitem">Dr. Shashank Sharma, Manipal University Jaipur </li>

                            <li className="advitem">Col. Sanjiv Jaswal, Manipal University Jaipur </li>

                            <li className="advitem">Dr. Dinesh Yadav, Manipal University Jaipur</li>

                            <li className="advitem">Dr. Sushil Kumar Jain, Manipal University Jaipur </li>

                            <li className="advitem">Dr. Mahesh Jangid, Manipal University Jaipur </li>

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