import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/index';
import Committee from './Components/Committee/index';
import ContactUs from './Components/ContactUs/index';
import KeyDates from './Components/Keydates/index';
import KeyNote from './Components/Keynote/index';
import Authors from './Components/Authors/index';
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL+'/'}>
              <Home />
            </Route>
            <Route exact path={process.env.PUBLIC_URL+'/authors'}>
              <Authors />
            </Route>
            <Route exact path={process.env.PUBLIC_URL+'/committee'}>
              <Committee />
            </Route>
            <Route exact path={process.env.PUBLIC_URL+'/keynote'}>
              <KeyNote />
            </Route>
            <Route exact path={process.env.PUBLIC_URL+'/dates'}>
              <KeyDates />
            </Route>
            <Route exact path={process.env.PUBLIC_URL+'/contactus'}>
              <ContactUs />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
