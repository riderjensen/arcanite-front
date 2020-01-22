import * as actionTypes from '../actionTypes';

const initialState = {
	user: {}
  }
  
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case actionTypes.LOGIN_USER:
		return {...state, user: action.payload}
	case actionTypes.LOGOUT_USER:
		return {...state, user: {}}
	case actionTypes.SIGN_UP_USER:
		return {...state, user: action.payload}
	default:
		return state;
	}
}