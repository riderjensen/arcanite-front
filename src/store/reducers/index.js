import * as actionTypes from '../actionTypes';

import { updateObject } from '../../shared/utility';

const initialState = {
    // items
};

const addIngredient = (state, action) => {
    // do things
	// const updatedIngredient = {
	// 	[action.ingredientName]: state.ingredients[action.ingredientName] + 1
	// }
	// const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
	// const updatedState = {
	// 	ingredients: updatedIngredients,
	// 	totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
	// 	building: true,
	// }
	return updateObject(state, updatedState);
}