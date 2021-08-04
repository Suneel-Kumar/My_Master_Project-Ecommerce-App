import cartActionsTypes from './cart.types';
import { addItemtoCart } from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            };
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems : addItemtoCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default CartReducer