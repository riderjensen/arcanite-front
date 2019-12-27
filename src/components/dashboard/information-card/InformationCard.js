import React from 'react';

import './InformationCard.css';

function InformationCard(props) {
    return (
        <div className="InformationCard">
            <h1>{props.name}</h1>
            <hr />
            <div className="information">
                <div className="info-section">
                    <span>{new Date(props.lastUpdated).toDateString()}</span> Last Updated
                </div>
                <div className="info-section">
                    <span>{props.reboots}</span> Reboots
                </div>
                <div className="info-section">
                    <span>{props.healthRating}</span> Health Rating
                </div>
            </div>
            <p>{props.serverInformation}</p>
        </div>
    )
}


export default InformationCard;