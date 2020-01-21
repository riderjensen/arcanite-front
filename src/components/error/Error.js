import React from 'react';

import './Error.css';

function Error (props) {
    return (
        <div className="error-banner">
            <p>{props.msg ? props.msg : "An unknown error was encountered. Please refresh the page and try again."}</p>
        </div>
    )
}

export default Error;