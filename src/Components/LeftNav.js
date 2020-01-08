import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faTools, faUsersCog, faBullhorn, faChartPie } from '@fortawesome/free-solid-svg-icons'

export default class LeftNav extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="col-3 sidebar">  
            <div className="aside">      
             <h3>Dashboard</h3>
             <hr/>
				<ul>
				<li><Link to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></li>
				<li><Link to="/settings"><FontAwesomeIcon icon={faTools} /> Setting</Link></li>
				<li><Link to="/profile"><FontAwesomeIcon icon={faUsersCog} /> Profile</Link></li>
				<li><a href="#contact"><FontAwesomeIcon icon={faChartPie} /> Analytics </a></li>
				<li><a href="#contact"><FontAwesomeIcon icon={faBullhorn} /> Announcement</a></li>
				</ul>
             </div>
            </div>
           </React.Fragment>
        )
    }
}
