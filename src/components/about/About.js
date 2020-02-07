import React from 'react';
import './About.css';

function About() {
    return (
        <div>
            <h1>About Project Arcanite</h1>
            <div class="about-text">
                <p>Project Arcanite is an new project founded in the spirit of YikYak. We want the ability for people to post things and be able to comment on them but with limited ability. For example, we only want to allow top level comments but we also want to allow editing of posts at least once.</p>
                <p>Our vision is to create a place where people can talk freely but still have some restrictions on how deep those conversations can go.</p>
                <p>We are constantly updating this application so please stay tuned. You are welcome to follow it's progress on the <a href="https://github.com/riderjensen/arcanite-front" target="_blank">Github page</a>.</p>
            </div>
        </div>
    )
}

export default About;