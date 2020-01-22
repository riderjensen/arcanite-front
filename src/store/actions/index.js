import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const userLogin = user => {
    return dispatch => {
        return axios.post('http://localhost:8080/auth/login', {
            password: user.password,
            username: user.username
        }).then(resp => {
            localStorage.setItem("arcaniteToken", resp.token)
            dispatch(loginUserDispatching(resp.user))
        }).catch(err => console.log(`Err: ${err}`))
    }
}
  
const loginUserDispatching = userObj => ({
    type: actionTypes.LOGIN_USER,
    payload: userObj
})

export const userSignUp = user => {
    return dispatch => {
        return axios.post('http://localhost:8080/auth/signup', {
            password: user.password,
            username: user.username,
            email: user.email
        }).then(resp => {
            localStorage.setItem("arcaniteToken", resp.token)
            dispatch(signUpUserDispatching(resp.user))
        }).catch(err => console.log(`Err: ${err}`))
    }
}
  
const signUpUserDispatching = userObj => ({
    type: actionTypes.SIGN_UP_USER,
    payload: userObj
})

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get('http://localhost:8080/auth/token', { headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }}).then(resp => {
                console.log(resp)
                if(resp.error) {
                    localStorage.removeItem('arcaniteToken')
                } else {
                    dispatch(loginUserDispatching(resp.user))
                }
            }).catch(err => {
                console.log(`Err: ${err}`)
            })
        }
    }
}

export const logoutUser = () => {
    return dispatch => {
        localStorage.removeItem('arcaniteToken');
        dispatch(logOutUserDispatching())
    }
}

const logOutUserDispatching = () => ({
    type: actionTypes.LOGOUT_USER
})