import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Settings from "./Settings";
import Profile from "./Profile"; 

export default class Dashboard extends Component {
    render() {
        return (
             <div className="col-8 dashboard-cls">  
			 <h3>Welcome to User Dashboard</h3>
			<Tabs>
			<TabList>
			<Tab>Setting</Tab>
			<Tab>Profile</Tab>
			</TabList>

			<TabPanel>
			<Settings/>
			</TabPanel>
			<TabPanel>
			<Profile/>
			</TabPanel>
			</Tabs>
			 
    </div>
        )
    }
}
