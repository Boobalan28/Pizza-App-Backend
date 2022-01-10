export const getAllPizzasReducer=(state={Pizzas : [] } , action)=>{

    switch(action.type)
    {
        case 'GET_PIZZAS_REQUEST' : return{
            loading : true,
            ...state
        }
        break;
        case 'GET_PIZZAS_SUCCESS' : return{
            loading : false ,
            Pizzas : action.payload
        }
        break;
        case 'GET_PIZZAS_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        break;
        default : return state
    }

}

export const getPizzaByIdReducer=(state={} , action)=>{

    switch(action.type)
    {
        case 'GET_PIZZABYID_REQUEST' : return{
            loading : true,
            ...state
        }
        break;
        case 'GET_PIZZABYID_SUCCESS' : return{
            loading : false ,
            pizza : action.payload
        }
        break;
        case 'GET_PIZZABYID_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        break;
        default : return state
    }

}

export const addPizzaReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'ADD_PIZZA_REQUEST' : return{
            loading : true,
            ...state
        }
        break;
        case 'ADD_PIZZA_SUCCESS' : return{
            loading : false ,
            success : true,
        }
        break;
        case 'ADD_PIZZA_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        break;
        default : return state
    }

}

export const editPizzaReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'EDIT_PIZZA_REQUEST' : return{
            editloading : true,
            ...state
        }
        break;
        case 'EDIT_PIZZA_SUCCESS' : return{
            editloading : false ,
            editsuccess : true,
        }
        break;
        case 'EDIT_PIZZA_FAILED' : return{
            editerror : action.payload ,
            editloading : false
        }
        break;
        default : return state
    }

}