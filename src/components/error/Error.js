import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Error.css';

function Error (props) {
    return (
        <div className="error-banner">
            <p>{props.msg ? props.msg : "An unknown error was encountered. Please refresh the page and try again."}</p>
            <FontAwesomeIcon className="icon editIcons" icon={faTimes} onClick={props.clearError} />
        </div>
    )
}

export default Error;