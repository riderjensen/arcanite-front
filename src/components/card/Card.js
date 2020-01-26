import React from 'react';
import { NavLink } from 'react-router-dom'
import './Card.css';

function Card(props) {
    return (

        <div className="card staff">
            <h5 className="card-title">{props.content} - <span className="title">{props.votes} votes</span></h5>
            <p className="view-link">
                <NavLink  to={'/post/'+props._id}>View</NavLink>
            </p>
            {props.user === props.loggedInUser ? <p className="view-link">
                Edit
            </p> : null}

        </div>
    )
}

export default Card;