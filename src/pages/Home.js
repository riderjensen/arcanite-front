import React from 'react';

import NoAuthNavigation from '../components/navigation/NoAuthNavigation';

import './Home.css';


function Home() {
    return (
        <div>
            <NoAuthNavigation />
            <div className="main-header">
                <p>
                    Edit src/App.js and save to reload.
                </p>
            </div>
            <div className="main-information">

            </div>
            <div className="secondary-information">
                
            </div>
        </div>
    )
}

export default Home;