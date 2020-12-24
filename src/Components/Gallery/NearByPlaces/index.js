import React, { Component } from "react";
import Navbar from "../../Navbar/index";
import "materialize-css";
import { Carousel, Row, Col, MediaBox } from "react-materialize";
import "./nearbyplaces.css";
class NearBy extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            fullWidth: true,
            indicators: true,
          }}
        >
          <div className="nearbyfilter">
            <h1 className="font-bold font-setting">NEARBY PLACES TO VISIT</h1>
          </div>
        </Carousel>
        <div className="container text-set container-2">
          <h3 className="font-bold text-center heading-c">CHANDIGARH</h3>
          <div className="text-al">
            Chandigarh is the best-planned city in India, with architecture
            which is world-renowned, and a quality of life, which is
            unparalleled. As the capital of the states of Punjab and Haryana,
            and the Union Territory of Chandigarh it is a prestigious city. The
            face of modern India, Chandigarh, is the manifestation of a dream
            that Pt. Jawahar Lal Nehru envisaged and Le Corbusier executed.
            Serenity and a city are two diametrically opposite concepts, which
            however, get belied in the 'City Beautiful'. Chandigarh is a rare
            epitome of modernization co-existing with nature's preservation. It
            is here that the trees and plants are as much a part of the
            construction plans as the buildings and the roads. India’s first
            planned city, is a rich, prosperous, spic and span, green city
            rightly called “ THE CITY BEAUTIFUL ”.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Chandigarh-cover1.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/Gandhi_Bhawan_at_Punjab_University.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rock_Garden%2C_Chandigarh-statues.jpg/800px-Rock_Garden%2C_Chandigarh-statues.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sukhna_Lake_Chandigarh.JPG/1280px-Sukhna_Lake_Chandigarh.JPG"
                />
              </MediaBox>
            </Col>
          </Row>

          <h3 className="font-bold text-center heading-c">SHIMLA</h3>
          <div className="text-al">
            "The Hill-Station with Rich Colonial History" Shimla is the capital
            Himachal Pradesh in India and a popular hill-station among Indian
            families and honeymooners. Situated at the height of 2200m, Shimla
            was the summer capital of British India. Shimla still retains its
            old-world charm with beautiful colonial architecture,
            pedestrian-friendly Mall Road and the ridge lined up with multiple
            shops, cafes and restaurants. The weather is pleasant for most of
            the months with tourists flocking especially during the summer
            months. The winters are cold with some days of snow from
            mid-December till February end
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/KUFRI_20190829173141.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/1913_20190523190338.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/Green_Valley_Shimla_20170807131601.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1388521838_20190829175426_20190829175450.png"
                />
              </MediaBox>
            </Col>
          </Row>
          <h3 className="font-bold text-center heading-c">MANALI</h3>
          <div className="text-al">
            Nestled in between the snow-capped slopes of the Pir Panjal and the
            Dhauladhar ranges, Manali is one of the most popular hill stations
            in the country. With jaw-dropping views, lush green forests,
            sprawling meadows carpeted with flowers, gushing blue streams, a
            perpetual fairy-tale like mist lingering in the air, and a
            persistent fragrance of pines - Manali has been blessed with
            extraordinary scenic beauty. From museums to temples, from quaint
            little hippie villages to bustling upscale streets, river adventures
            to trekking trails, Manali has every reason to be the tourist magnet
            it is, all year round. Swaying eucalyptus trees, endearing little
            eateries, small kitschy local market places, and cafes which serve
            delicious local food at unbelievable prices, Old Manali is a serene,
            tranquil place, whose lingering silence is broken only by the
            twittering of the birds and the sound of the roaring waters of the
            Kullu River.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_633164246_20190904103856_20190904103926.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/490_20190308180742.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/4708_20190501151400.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/cmsuploads/compressed/manu_20180226162059.jpg"
                />
              </MediaBox>
            </Col>
          </Row>
          <h3 className="font-bold text-center heading-c">MANIKARAN</h3>
          <div className="text-al">
          Manikaran, located at an altitude of 1737 m, is a famous pilgrimage centre for both Sikhs and Hindus, situated 45 km from Kullu, in the state of Himachal Pradesh. The name ‘Manikaran’ refers to a jewel. According to a legend, Goddess Parvati, wife of Shiva, the Hindu god of destruction, lost a precious jewel in a water body in this region. When Parvati asked Shiva to look for it, he asked His followers to hunt for it. When they were unable to find the jewel, Shiva flew into a rage an opened his third eye. This action caused disruption in the earth which led to the creation of innumerable precious stones and jewels.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/bgImages/MANIKARAN-SAHIB.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.nativeplanet.com/photos/original/2018/07/photo-91-161736-2.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/1237.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/1238.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
          </Row>
          <h3 className="font-bold text-center heading-c">KULLU</h3>
          <div className="text-al">
          Kullu, a popular tourist destination in Himachal Pradesh located on the banks of Beas river. With panoramic views and majestic hills covered with Deodar and Pine trees, it is a nature lover's paradise. Kullu generally coupled with its sister town Manali which is on much higher altitude and provides more scenic views.

Situated at an altitude of 1230 meters between Pir Pranjal, Lower Himalayan and Great Himalayan Ranges, Kullu is abundant with apple orchards, pristine river streams and a wonderful climate. Tourists coming to Kullu and Manali can indulge in a lot of adventure sports activities like river rafting, trekking, mountaineering etc. Bhuntar, the place that houses airport and bus junction and is used as the base town to reach Manikaran, Kasol, Malana, Bhunter and Rohtang Pass is located in Kullu. Kullu also has few important temples like the Raghunath Temple and Jagannathi Devi Temple. Apart from temples, the Pandoh Dam and Chandrakhani Pass are also must-visits in this region.


          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/dest_pixa_9681.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/271.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/272.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/278.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
          </Row>
        </div>

        <div className=" nearbyfooter"></div>
      </>
    );
  }
}

export default NearBy;
