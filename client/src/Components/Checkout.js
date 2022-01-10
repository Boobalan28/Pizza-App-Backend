import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../Actions/OrderAction';
import "./Pizza.css";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from '../Components/Success';



export default function Checkout({subtotals}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotals))

    }

    return (
        <div>
            
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}

            <StripeCheckout
            amount={subtotals*100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_51KAW3lSAseK0DCxMDoFKa6gJ0pQN7iNSKp4eBPG3cflAuxhW6wtPXr8VOOrNhU6wJoqzvQWQQqwYTwcSSpx1UCTe00AHfss9nB'
            currency='INR'
            >
                  <button className='btn' id='lbtn'>Checkout</button>

            </StripeCheckout>
            
        </div>
    )

   
}
