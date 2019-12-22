import React from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Dashboard from '../../components/dashboard/Dashboard';

import './DashboardContainer.css';

function DashboardContainer() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <Dashboard />
        </div>
    )
}

export default DashboardContainer;