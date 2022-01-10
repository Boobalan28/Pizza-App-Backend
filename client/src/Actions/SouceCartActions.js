export const addtoCart = (souces, quantity)=>(dispatch,getState)=>{

    var cartItemse={
        name:souces.name,
        _id:souces._id,
        img:souces.img,
        quantity:Number(quantity),
        category:souces.category,
        price:souces.price,
        prices:souces.price * quantity
    }

    if (cartItemse.quantity>10) {

        alert('you cannot add more than 10 quantity')
        
    } else {
        if (cartItemse.quantity<1) {
            
            dispatch({type:'DELETE_FROM_SOUCECART',payload:souces})

        } else {

            dispatch({type:'ADD_TO_SOUCECART',payload : cartItemse})
        
        }
        
    }
    const cartItem = getState().cartReducer.cartItem
    localStorage.setItem('cartItem', JSON.stringify(cartItem))

};

export const deleteFromCarts = (souces)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_SOUCECART',payload:souces})

    const cartItem = getState().cartReducer.cartItem
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
}