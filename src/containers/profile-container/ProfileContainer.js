import React from 'react';

import AuthNav from '../../components/navigation/AuthNavigation';
import Dashboard from '../../components/profile/Profile';

import './ProfileContainer.css';

function DashboardContainer() {
    return (
        <div className="dashboard-container">
            <AuthNav />
            <Dashboard />
        </div>
    )
}

export default DashboardContainer;