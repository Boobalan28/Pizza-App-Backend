import {combineReducers} from 'redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer, addPizzaReducer, editPizzaReducer, getPizzaByIdReducer } from './Reducers/PizzaReducer';
import { cartReducer } from './Reducers/CartReducer';
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './Reducers/UserReducer';
import { placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer } from './Reducers/OrderReducer';


const finalReducer = combineReducers({
   getAllPizzasReducer : getAllPizzasReducer,
   addPizzaReducer:addPizzaReducer,
   editPizzaReducer:editPizzaReducer,
   getPizzaByIdReducer:getPizzaByIdReducer,
    cartReducer : cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    getAllUsersReducer:getAllUsersReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    getAllOrdersReducer:getAllOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;


const initialstate= {
    cartReducer : {
        cartItems : cartItems,
        cartItem : cartItem
    },
    loginUserReducer :{
        currentUser : currentUser
    }
}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialstate, composeEnhancers(applyMiddleware(thunk)));

export default store;