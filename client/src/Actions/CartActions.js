
export const addTOCart = (pizzas , quantity , varients)=> (dispatch , getState)=>{
        
    var cartItem = {
        name:pizzas.name,
        _id:pizzas._id,
        image:pizzas.image,
        quantity:Number(quantity),
        category:pizzas.category,
        varients:varients,
        price:pizzas.price,
        prices:pizzas.price[0][varients] * quantity
    }

    if (cartItem.quantity>10) {

        alert('you cannot add more than 10 quantity')
        
    } else {
        if (cartItem.quantity<1) {

            dispatch({type:'DELETE_FROM_CART',payload:pizzas});
            
        } else {
            
            dispatch({type:'ADD_TO_CART', payload : cartItem});

        }
    }
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
};

export const deleteFromCart = (pizzas)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_CART',payload:pizzas})
    
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
};