import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
	[selectCart],
	cart=>cart.cartItems
	);

export const selectHidden=createSelector(
	[selectCart],
	cart=>cart.hidden
	);

export const selectItemTotal=createSelector(
	[selectCartItems],
	cartItems=>cartItems.reduce((accumaultedQuantity,cartItem)=>
		accumaultedQuantity+cartItem.quantity*cartItem.price,0)
	)

export const selectCartItemsCount=createSelector(
	[selectCartItems],
	cartItems=>cartItems.reduce((accumaultedQuantity,cartItem)=>
		accumaultedQuantity+cartItem.quantity,0)

	)