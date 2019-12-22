import React, { Component } from 'react';

import NoAuthNavigation from '../components/navigation/NoAuthNavigation';

import './Home.css';


function Home() {
    return (
        <div>
            <NoAuthNavigation />
            <div className="App-header">
                <p>
                    Edit src/App.js and save to reload.
                </p>
            </div>
        </div>
    )
}

export default Home;