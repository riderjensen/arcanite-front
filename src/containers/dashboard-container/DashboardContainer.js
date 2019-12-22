import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Dashboard from '../../components/dashboard/Dashboard';

import './DashboardContainer.css';

class DashboardContainer extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <Sidebar />
                <Dashboard />
            </div>
        )
    }
}

export default DashboardContainer;