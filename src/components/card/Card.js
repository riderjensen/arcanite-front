import React from 'react';
import { NavLink } from 'react-router-dom'
import './Card.css';

function Card(props) {
    return (
        <div class="card staff">
            <div class="card-body">
                <h5 class="card-title">{props.content}</h5>
                <p class="title">{props.votes}</p>
                <p class="card-text">{props.content}</p>
            </div>
        </div>
    )
}

export default Card;