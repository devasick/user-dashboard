// Author: Asick Ahamed
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Profile from "./Profile";
import LeftNav from "./LeftNav";
import logo from '../Common/images/logo.png' 


class Header extends Component {

  
  render() {
 
    return (
     
      <Router>
      <header>
      <div className="topnav">
      <a className="logo" href="https://innoloft.com/" target="_blank"><img src={logo} alt={"logo"}/> </a>

      <div className="topnav-right">
      <a href="#search"><FontAwesomeIcon icon={faBell} /></a>
      <a href="#about"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
      </div>
      </header>
     
        <Switch>
        <Router basename={'/'}>
        <Route exact path="/">
        <div className="container">
        <div className="row">
        <LeftNav/>
        <Dashboard/>
        </div>
        </div>
        </Route>
        <Route exact path="/dashboard">
        <div className="container">
        <div className="row">
        <LeftNav/>
        <Dashboard/>
        </div>
        </div>
        </Route>
          <Route  path="/settings">
            <div className="container">
            <div className="row">
            <LeftNav/>
            <div className="col-8 dashboard-cls"> 
            <h3>Setting</h3>
            <Settings />
            </div>
            </div>
            </div>
        </Route>
        <Route  path="/profile">
           <div className="container">
           <div className="row">
            <LeftNav/>
            <div className="col-8 dashboard-cls">  
            <h3>Profile</h3>
            <Profile/>
            </div>
           </div>
           </div>
        </Route>
        </Router>
        </Switch>
      
    </Router>
    
    );
  }
}

export default Header;