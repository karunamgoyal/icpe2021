import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/index';
import Committee from './Components/Committee/index';
import Advisory from './Components/Committee/Advisory/index';
import Student from './Components/Committee/Student/index';
import Local from './Components/Committee/Local/index';
import Program from './Components/Committee/program/index';
import ContactUs from './Components/ContactUs/index';
import KeyDates from './Components/Keydates/index';
import KeyNote from './Components/Keynote/index';
import AboutKkr from './Components/Gallery/AboutKKR/index';
import Gallery from "./Components/Gallery/Gallery/index";
import HowTo from "./Components/Gallery/HowtoReach/index";
import NearBy from "./Components/Gallery/NearByPlaces/index";
import Authors from './Components/Authors/index';
import Registration from "./Components/Authors/Registration/index";
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/authors'>
              <Authors />
            </Route>
            <Route exact path='/committee'>
              <Committee />
            </Route>
            <Route exact path="/advisory">
              <Advisory />
            </Route>
            <Route exact path="/student">
              <Student />
            </Route>
            <Route exact path="/local">
              <Local />
            </Route>
            <Route exact path="/program">
              <Program />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/keynote">
              <KeyNote />
            </Route>
            <Route exact path='/dates'>
              <KeyDates />
            </Route>
            <Route exact path='/contactus'>
              <ContactUs />
            </Route>
            <Route exact path='/reach'>
              <HowTo/>
            </Route>
            <Route exact path='/nearby'>
              <NearBy />
            </Route>
            <Route exact path='/gallery'>
              <Gallery />
            </Route>
            <Route exact path='/aboutkkr'>
              <AboutKkr />
            </Route>
          </Switch>
        </Router>
      </div>
      <div class="footer-copyright center black white-text">
            © 2020-21 Copyright ICCWC-2021
          </div>
    </div>
  );
}

export default App;
