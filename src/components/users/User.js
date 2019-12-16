import React from 'react';

import './User.css';

function User(props) {
    return (
        <div className="user-card">
            <img src={props.picture.large} alt={props.name.first} />
            <h3>{props.name.first} {props.name.last}</h3>
            <p>Member for {props.registered.age} {parseInt(props.registered.age) > 1 ? "years" : "year"}</p>
            <a href={"mailto:" + props.email}>Ask {props.name.first} about {props.gender === "female" ? "her" : "his"} experience</a>
        </div>
    )
}


export default User;