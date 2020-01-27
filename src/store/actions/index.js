import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const userLogin = user => {
    return dispatch => {
        return axios.post('http://localhost:8080/auth/login', {
            password: user.password,
            username: user.username
        }, {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }).then(resp => {
            localStorage.setItem("arcaniteToken", resp.data.token)
            dispatch(loginUserDispatching(resp.data.user))
            // login them in and direct to dashboard
        }).catch(error  => console.log(error.response))
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
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(resp => {
            localStorage.setItem("arcaniteToken", resp.data.token)
            dispatch(signUpUserDispatching(resp.data.user))
            // login them in and direct to dashboard
        }).catch(error  => console.log(error.response))
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
                'Authorization' : `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }}).then(resp => {
                if(resp.error) {
                    localStorage.removeItem('arcaniteToken')
                } else {
                    dispatch(loginUserDispatching(resp.data.username))
                }
            }).catch(error  => console.log(error.response)
        )}
    }
}

export const userLogout = () => {
    return dispatch => {
        localStorage.removeItem('arcaniteToken');
        dispatch(logOutUserDispatching())
    }
}

const logOutUserDispatching = () => ({
    type: actionTypes.LOGOUT_USER
})

export const submitPost = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.post('http://localhost:8080/p', {
                "content": payload.content
            }, { headers: {
                'Authorization' : `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }}).then(resp => {
                dispatch(submitPostDispatching(resp.data.username))
            }).catch(error  => console.log(error.response)
        )}
    }
}

const submitPostDispatching = () => ({
    type: actionTypes.SUBMIT_POST
})

export const getPosts = () => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get('http://localhost:8080/a').then(resp => {
                dispatch(getPostsDispatching(resp.data))
            }).catch(err => console.log(err))
        }
    }
}

const getPostsDispatching = posts => ({
    type: actionTypes.GET_POSTS,
    payload: posts
})

export const getUserPostsAndComments = () => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get('http://localhost:8080/p/all', { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                dispatch(getUserPostsAndCommentsDispatching(resp.data.posts))
            }).catch(error  => console.log(error.response)
        )}
    }
}

const getUserPostsAndCommentsDispatching = posts => ({
    type: actionTypes.GET_USER_POSTS,
    payload: posts
})

export const editPost = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.patch(`http://localhost:8080/p/${payload.id}`, {
                "content": payload.content
            }, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                dispatch(editPostDispatching(resp.data.posts))
            }).catch(error  => console.log(error.response)
        )}
    }
}

const editPostDispatching = payload => ({
    type: actionTypes.EDIT_POST,
    payload: payload
})