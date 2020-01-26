import * as actionTypes from '../actionTypes';

const initialState = {
	username: null,
	modal: false,
	posts: [],
	userPosts: []
  }
  
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LOGIN_USER:
			return {...state, username: action.payload}
		case actionTypes.LOGOUT_USER:
			return {...state, username: null}
		case actionTypes.SIGN_UP_USER:
			return {...state, username: action.payload}
		case actionTypes.SUBMIT_POST:
			return {...state, username: action.payload}
		case actionTypes.GET_POSTS:
			return {...state, posts: action.payload}
		case actionTypes.GET_USER_POSTS:
			return {...state, userPosts: action.payload}
		default:
			return state;
	}
}