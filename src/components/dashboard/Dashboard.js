import React, { Component } from 'react';

import './Dashboard.css';

import InformationCard from './information-card/InformationCard';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <InformationCard />
            </div>
        )
    }
}

export default Dashboard;