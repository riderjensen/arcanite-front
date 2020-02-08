import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const userLogin = user => {
    return dispatch => {
        return axios.post('https://project-arcanite.herokuapp.com/auth/login', {
            password: user.password,
            username: user.username
        }, {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }).then(resp => {
            localStorage.setItem("arcaniteToken", resp.data.token)
            dispatch(loginUserDispatching(resp.data.user))
            // login them in and direct to dashboard
        }).catch(error  => {
            setTimeout(() => {
                dispatch(clearErrorDispatching())
            }, 10000)
            dispatch(addErrorDispatching(error.response))
        })
    }
}
  
const loginUserDispatching = userObj => ({
    type: actionTypes.LOGIN_USER,
    payload: userObj
})

export const userSignUp = user => {
    return dispatch => {
        return axios.post('https://project-arcanite.herokuapp.com/auth/signup', {
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
        }).catch(error  => {
            setTimeout(() => {
                dispatch(clearErrorDispatching())
            }, 10000)
            dispatch(addErrorDispatching(error.response))
        })
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
            return axios.get('https://project-arcanite.herokuapp.com/auth/token', { headers: {
                'Authorization' : `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }}).then(resp => {
                if(resp.error) {
                    localStorage.removeItem('arcaniteToken')
                } else {
                    dispatch(loginUserDispatching(resp.data.username))
                }
            }).catch(error  => console.log(error.response))
        }
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
            return axios.post('https://project-arcanite.herokuapp.com/p', {
                "content": payload.content
            }, { headers: {
                'Authorization' : `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }}).then(resp => {
                dispatch(submitPostDispatching(resp.data.username))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

const submitPostDispatching = () => ({
    type: actionTypes.SUBMIT_POST
})

export const getPosts = () => {
    return dispatch => {
        return axios.get('https://project-arcanite.herokuapp.com/a').then(resp => {
            dispatch(getPostsDispatching(resp.data))
        }).catch(error => {
            setTimeout(() => {
                dispatch(clearErrorDispatching())
            }, 10000)
            dispatch(addErrorDispatching(error.response))
        })
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
            return axios.get('https://project-arcanite.herokuapp.com/p/all', { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                dispatch(getUserPostsAndCommentsDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
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
            return axios.patch(`https://project-arcanite.herokuapp.com/p/${payload.id}`, {
                "content": payload.content
            }, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(editPostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const editComment = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.patch(`https://project-arcanite.herokuapp.com/c/${payload.id}`, {
                "content": payload.content
            }, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(editPostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const addComment = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.post(`https://project-arcanite.herokuapp.com/c/${payload.id}`, {
                "content": payload.content
            }, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(editPostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const votePost = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get(`https://project-arcanite.herokuapp.com/p/v/${payload.id}`, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(votePostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const unVotePost = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get(`https://project-arcanite.herokuapp.com/p/w/${payload.id}`, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(votePostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const unVoteComment = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get(`https://project-arcanite.herokuapp.com/c/w/${payload.id}`, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(votePostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const voteComment = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.get(`https://project-arcanite.herokuapp.com/c/v/${payload.id}`, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
                // dispatch(votePostDispatching(resp.data.posts))
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const getOnePost = payload => {
    return dispatch => {
        return axios.get(`https://project-arcanite.herokuapp.com/a/${payload}`).then(resp => {
            dispatch(getOnePostDispatching(resp.data.post))
        }).catch(error  => {
            setTimeout(() => {
                dispatch(clearErrorDispatching())
            }, 10000)
            dispatch(addErrorDispatching(error.response))
        })
    }
}

const getOnePostDispatching = payload => ({
    type: actionTypes.GET_ONE_POST,
    payload: payload
})

export const deletePost = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.delete(`https://project-arcanite.herokuapp.com/p/${payload.id}`, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const deleteComment = payload => {
    return dispatch => {
        const token = localStorage.arcaniteToken;
        if (token) {
            return axios.delete(`https://project-arcanite.herokuapp.com/c/${payload.id}`, { headers: {
                'Authorization' : `${token}`,
                'Accept': 'application/json',
            }}).then(resp => {
                console.log(resp)
            }).catch(error  => {
                setTimeout(() => {
                    dispatch(clearErrorDispatching())
                }, 10000)
                dispatch(addErrorDispatching(error.response))
            })
        }
    }
}

export const clearError = _ => {
    return dispatch => {
        dispatch(clearErrorDispatching())
    }
}

const clearErrorDispatching = _ => ({
    type: actionTypes.CLEAR_ERROR
})

const addErrorDispatching = payload => {
    let message = '';
    payload && payload.data ? message = payload.data.message : message =  'An unexpected error occured. Please try again later.'
    return {
        type: actionTypes.ADD_ERROR,
        payload: message
    }
}