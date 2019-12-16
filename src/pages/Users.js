import React, { Component } from 'react';
import User from '../components/users/User';
import axios from 'axios';

import './Users.css';

class Users extends Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=3').then(persons => {
            this.setState({
                persons: persons.data.results
            });
        })
    }

    render() {
        return (
            <div className="App-header">
                <p>Users</p>
                {this.state.persons.map(person => (
                    <User {...person} />
                ))}
            </div>
        )
    }
}

export default Users;