import React, { Component } from 'react';

import User from '../components/users/User';
import NoAuthNavigation from '../components/navigation/NoAuthNavigation';
import Error from '../components/error/Error';

import axios from 'axios';

import './Users.css';

class Users extends Component {

    state = {
        persons: [],
        error: false
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=3').then(persons => {
            this.setState({
                persons: persons.data.results
            });
        }).catch(err => {
            console.log(err)
            this.setState({
                error: true
            })
        })
    }

    render() {
        return (
            <div>
                <NoAuthNavigation />
                <h1>Users</h1>
                <div className="user-container">
                {this.state.error ? <Error /> : this.state.persons.map(person => (
                    <User {...person} key={person.login.uuid} />
                ))}
                </div>
            </div>
        )
    }
}

export default Users;