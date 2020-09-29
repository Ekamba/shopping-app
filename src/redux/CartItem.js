export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState = [];

const cartItemsReducer = (state = initialState, action) => {

  //this is great. 

  //maybe we can add some more stuff, like a "CHECKOUT" for example, where it makes a request to the backend, and save it in the database. 
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
  }
  return state;
};

export default cartItemsReducer;
