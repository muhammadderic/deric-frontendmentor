import type { 
  ProductState, 
  ProductAction 
} from '@challenges/intermediate/e-com-product-page/types';

export const ProductReducer = (
  state: ProductState, 
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: {
          ...action.payload,
          id: action.payload.id || Date.now()
        }
      };
    }
    
    case "REMOVE_PRODUCT": {
      return {
        ...state,
        cart: null
      };
    }
    
    case "UPDATE_QUANTITY": {
      if (!state.cart) return state;
      
      return {
        ...state,
        cart: {
          ...state.cart,
          quantity: action.payload.quantity
        }
      };
    }
    
    default:
      return state;
  }
};