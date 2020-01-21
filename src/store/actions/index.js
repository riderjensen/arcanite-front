import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const userLogin = user => {
    return dispatch => {
        return axios.post('http://localhost:8080/auth/login', {
            password: user.password,
            username: user.username
        }).then(resp => {
            localStorage.setItem("token", resp.token)
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
            localStorage.setItem("token", resp.token)
            dispatch(signUpUserDispatching(resp.user))
        }).catch(err => console.log(`Err: ${err}`))
    }
}
  
const signUpUserDispatching = userObj => ({
    type: actionTypes.SIGN_UP_USER,
    payload: userObj
})

export const authCheckState = inc => {
    return true;
}