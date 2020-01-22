import React from 'react';

import NoAuthNavigation from '../../components/navigation/NoAuthNavigation';

import './HomeContainer.css';


function Home() {
    return (
        <div>
            <NoAuthNavigation />
            <div className="main-header">
                <p>
                    Main page for posts to be displayed
                </p>
            </div>
        </div>
    )
}

export default Home;