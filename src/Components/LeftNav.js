import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
				<li><a href="#home"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</a></li>
				<li><a href="#news"><FontAwesomeIcon icon={faTools} /> Setting</a></li>
				<li><a href="#contact"><FontAwesomeIcon icon={faUsersCog} /> Profile</a></li>
				<li><a href="#contact"><FontAwesomeIcon icon={faChartPie} /> Analytics </a></li>
				<li><a href="#contact"><FontAwesomeIcon icon={faBullhorn} /> Announcement</a></li>
				</ul>
             </div>
            </div>
           </React.Fragment>
        )
    }
}
