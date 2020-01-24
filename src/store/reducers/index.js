import * as actionTypes from '../actionTypes';

const initialState = {
	username: null
  }
  
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case actionTypes.LOGIN_USER:
		return {...state, username: action.payload}
	case actionTypes.LOGOUT_USER:
		return {...state, username: null}
	case actionTypes.SIGN_UP_USER:
		return {...state, username: action.payload}
	default:
		return state;
	}
}