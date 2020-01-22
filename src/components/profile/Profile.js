import React, { Component } from 'react';

import './Profile.css';


class Dashboard extends Component {
    state = {
        information:[
            {
                type: "post",
                content: "My post title",
                votes: 34,
                edited: false,
                _id: 1234
            },
            {
                type: "post",
                content: "My second post title",
                votes: 53,
                edited: true,
                _id: 12345
            },
            {
                type: "comment",
                content: "My first comment",
                votes: 11,
                edited: true,
                _id: 123456
            }
        ]
    }

    render() {
        return (
            <div className="dashboard">
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Dashboard;