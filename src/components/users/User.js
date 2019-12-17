import React from 'react';

import './User.css';

function User(props) {
    return (
        <div className="user-card">
            <div className="user-card-image-container">
                <img src={props.picture.large} alt={props.name.first} />
            </div>
            <div className="user-card-information">
                <h3>{props.name.first} {props.name.last}</h3>
                <p>{props.location.country}</p>
                <p>Member for {props.registered.age} {parseInt(props.registered.age) > 1 || parseInt(props.registered.age) === 0  ? "years" : "year"}</p>
                <a href={"mailto:" + props.email}>Ask {props.name.first} about {props.gender === "female" ? "her" : "his"} experience</a>
            </div>
        </div>
    )
}


export default User;