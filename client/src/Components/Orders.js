import React , {useState, useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {getUserOrders} from "../Actions/OrderAction";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from '../Components/Success';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Orders() {

    AOS.init()
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders , error , loading} = orderstate

    useEffect(() => {

        dispatch(getUserOrders())
      
    }, [])

    return (
        <>
            <div>
            <h2 style={{fontSize:'35px', marginTop:'30px' , marginLeft:'20px'}}>My Orders</h2>
            <div className="row justify-content-center" >
                {loading && (<Loading/>)}
                {error && (<Error error='Something went wrong'/>)}
                {orders && orders.map(order=>{
                    return <div className="col-md-8 m-3 p-1" data-aos='fade-down' style={{backgroundColor:'blue' , color:'white' , borderRadius:'10px'}}>

                            <div className="flex-container">
                                <div className='text-left w-100 m-1'>
                                    <h2 style={{fontSize:'25px'}}>Items</h2>
                                    <hr/>
                                    {order.orderItems.map(item=>{
                                        return <div>
                                            <p>{item.name} [{item.varients}] * {item.quantity} = {item.prices}</p>
                                        </div>
                                    })}
                                    <div>
                                    {order.orderItem.map(items=>{
                                        return <div> 
                                            <p>{items.name} {items.quantity} * {items.price} = {items.prices}</p>
                                        </div>
                                    })}
                                    </div>
                                </div>
                                <div className='text-left w-100 m-1'>
                                   
                                <h2 style={{fontSize:'25px'}}>Address</h2>
                                <hr/>
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                                </div>
                                <div className='text-left w-100 m-1'>
                                <h2 style={{fontSize:'25px'}}>Order Info</h2>
                                <hr/>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                                </div>
                            </div>

                    </div>
                })}
            </div>
            </div>
        </>
    )
}
