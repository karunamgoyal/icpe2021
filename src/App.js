import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/index';
import Committee from './Components/Committee/index';
import Advisory from './Components/Committee/Advisory/index';
import ContactUs from './Components/ContactUs/index';
import KeyDates from './Components/Keydates/index';
import KeyNote from './Components/Keynote/index';
import Authors from './Components/Authors/index';
<<<<<<< HEAD
import Registration from "./Components/Authors/Registration/index";
=======
import Registration from './Components/Authors/Registration/index';
import Navbar from "./Components/Navbar/index";
>>>>>>> feat: registration page added
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
<<<<<<< HEAD
            <Route exact path='/committee'>
=======
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/committee">
>>>>>>> feat: registration page added
              <Committee />
            </Route>
            <Route exact path="/advisory">
              <Advisory />
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
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
