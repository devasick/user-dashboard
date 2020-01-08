// Author: Asick Ahamed
import React, { Component } from 'react';
//import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Profile from "./Profile";
import LeftNav from "./LeftNav";
import logo from '../Common/images/logo.png' 



class Header extends Component {
  

  
  render() {
   // const { items } = this.state;
    
 
    return (
     
      <Router>
      <header>
      <ul>
      <li><a className="logo" href="#home"><img src={logo} alt={"logo"}/> </a></li>
      </ul>
        </header> 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Router basename={'/user-dashboard'}>
        <Route exact path="/">
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
            <Settings />
            </div>
            </div>
        </Route>
        <Route  path="/profile">
           <div className="container">
            <LeftNav/>
            <Profile />
           </div>
        </Route>
        </Router>
        </Switch>
      
    </Router>
    
    );
  }
}

export default Header;

