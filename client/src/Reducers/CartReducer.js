
const defaultstate = {
  cartItem : [],
  cartItems : []
};

export const cartReducer = (state= defaultstate, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
          
        const alreadyExists = state.cartItems.find(item=> item._id === action.payload._id)
        if (alreadyExists)
        { 
          return{
             ...state,
             cartItems : state.cartItems.map(item=> item._id === action.payload._id ? action.payload : item)
          }
          
        } else {   
        return{
           ...state,
            cartItems:[...state.cartItems , action.payload]
        }
      }
        break;
        case 'ADD_TO_SOUCECART': 
        const soucealreadyExists = state.cartItem.find(items=> items._id === action.payload._id)
        if (soucealreadyExists)
        { 
          return{
             ...state,
             cartItem : state.cartItem.map(items=> items._id === action.payload._id ? action.payload : items)
          }
        } else {   
        return{
          ...state,
           cartItem:[...state.cartItem , action.payload]
       } 
      } 
        break;
        case 'DELETE_FROM_CART':{
          return{
            ...state,
            cartItems: state.cartItems.filter(item=> item._id !== action.payload._id)
          }
        }
        break;
        case 'DELETE_FROM_SOUCECART':{
          return{
            ...state,
            cartItem: state.cartItem.filter(items=> items._id !== action.payload._id)
          }
        }
        break;
      default: return state
    }
};