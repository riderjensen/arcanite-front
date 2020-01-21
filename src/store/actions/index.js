import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const userLogin = user => {
    return dispatch => {
        return axios.post('http://localhost:8080/auth/login', {
            password: user.password,
            username: user.username
        }).then(resp => {
            localStorage.setItem("token", resp.token)
            dispatch(loginUser(resp.user))
        }).catch(err => console.log(`Err: ${err}`))
    }
  }
  
export const loginUser = userObj => ({
      type: actionTypes.LOGIN_USER,
      payload: userObj
  })

  export const authCheckState = inc => {
      return true;
  }