import React from 'react';
import './App.css';
import Headerapp from './components/header-app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutapp from './components/aboutapp';
import Home from './components/home';
import OrderHistory from './components/order/order-history';
import Profile from './components/profile/profile-detail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {

    return (
      <Router>
      <div>
        <Headerapp />
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <div className="main-wraper">
       <Switch>
            <Route path="/home">
            <Home />
          </Route> 
          <Route path="/about">
            <Aboutapp />
          </Route>
          <Route path="/order-history">
            <OrderHistory />
          </Route>
          <Route path="/profile-details">
            <Profile />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
*/}
        </Switch>
         </div>
      </div>
    </Router>
    );
}

export default App;
