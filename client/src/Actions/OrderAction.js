import axios from "axios";
export const placeOrder=(token , subtotals)=>async (dispatch , getState)=>{
  
      dispatch({type:'PLACE_ORDER_REQUEST'})
      const currentUser = getState().loginUserReducer.currentUser
      const cartItems = getState().cartReducer.cartItems
      const cartItem = getState().cartReducer.cartItem
      
      try {

         const response = await axios.post('http://localhost:8000/Orders/placeorders',{token , subtotals , currentUser , cartItems , cartItem})
         dispatch({type:'PLACE_ORDER_SUCCESS'})
         console.log(response);
          
      } catch (error) {
        dispatch({type:'PLACE_ORDER_FAILED'})
          console.log(error);
          
      }
}

export const getUserOrders=()=>async (dispatch,getState)=>{

  const currentUser = getState().loginUserReducer.currentUser
  dispatch({type:'GET_USER_ORDERS_REQUEST'})
  
  try {
      const response = await axios.post('http://localhost:8000/Orders/getuserorders' , {userid : currentUser._id})

      
      console.log(response);
      
      dispatch({type:'GET_USER_ORDERS_SUCCESS' , payload : response.data})
  } catch (error) {
      dispatch({type:'GET_USER_ORDERS_FAILED' , payload : error})
  }

}

export const getAllOrders=()=>async (dispatch,getState)=>{

  const currentUser = getState().loginUserReducer.currentUser
  dispatch({type:'GET_ALLORDERS_REQUEST'})
  
  try {
      const response = await axios.get('http://localhost:8000/Orders/getallorders')

      
      console.log(response);
      
      dispatch({type:'GET_ALLORDERS_SUCCESS' , payload : response.data})
  } catch (error) {
      dispatch({type:'GET_ALLORDERS_FAILED' , payload : error})
  }

}

export const deliverOrder=(orderid)=>async dispatch=>{
    try {
      const response = await axios.post('http://localhost:8000/Orders/deliverorder' , {orderid})
      console.log(response);
      alert('Order Delivered')
      const orders = await axios.get('http://localhost:8000/Orders/getallorders')
      dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
      console.log(error);
    }
}