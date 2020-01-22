import React from 'react';

import NoAuthNavigation from '../../components/navigation/NoAuthNavigation';

import './HomeContainer.css';


function Home() {
    return (
        <div>
            <NoAuthNavigation />
            <div className="main-header">
                <p>
                    Edit src/App.js and save to reload.
                </p>
            </div>
        </div>
    )
}

export default Home;