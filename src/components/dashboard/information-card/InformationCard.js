import React from 'react';

import './InformationCard.css';

function InformationCard(props) {
    return (
        <div className="InformationCard">
            <h1>Test</h1>
            <hr />
            <div className="information">
                <div className="info-section">
                    <span>14.3</span> seconds
                </div>
                <div className="info-section">
                    <span>734</span> rotations
                </div>
                <div className="info-section">
                    <span>4.3</span> rating
                </div>
            </div>
            <p>Test information</p>
        </div>
    )
}


export default InformationCard;