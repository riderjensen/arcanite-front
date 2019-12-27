import React, { Component } from 'react';

import './Dashboard.css';

import InformationCard from './information-card/InformationCard';

class Dashboard extends Component {
    state = {
        dashboards: [
            {
                name: "Cluster 1",
                lastUpdated: 1577400731159,
                reboots: 23,
                lastRebootTime: 180000,
                healthRating: "A",
                serverInformation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, magna vel venenatis placerat, dui magna imperdiet neque, ultricies dignissim lectus metus vitae lacus.",
                uptime: []
            },
            {
                name: "Cluster 2",
                lastUpdated: 1577422731159,
                reboots: 16,
                lastRebootTime: 193000,
                healthRating: "B",
                serverInformation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, magna vel venenatis placerat, dui magna imperdiet neque, ultricies dignissim lectus metus vitae lacus.",
                uptime: []
            },
            {
                name: "Cluster 3",
                lastUpdated: 1577444731159,
                reboots: 36,
                lastRebootTime: 177000,
                healthRating: "B",
                serverInformation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, magna vel venenatis placerat, dui magna imperdiet neque, ultricies dignissim lectus metus vitae lacus.",
                uptime: []
            }
        ]
    }

    render() {
        return (
            <div className="dashboard">
                <InformationCard />
            </div>
        )
    }
}

export default Dashboard;