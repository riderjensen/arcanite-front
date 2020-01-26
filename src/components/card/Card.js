import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Card.css';

class Card extends Component {

    render() {
        return (
        <div className="card staff">
            <h5 className="card-title">{this.props.content} - <span className="title">{this.props.votes} votes</span></h5>
            <p className="view-link">
                <NavLink  to={'/post/'+this.props._id}>View</NavLink>
            </p>
            {this.props.user === this.props.loggedInUser ? <p className="view-link">
                Edit
            </p> : null}

        </div>
        )
    }
}

export default Card;