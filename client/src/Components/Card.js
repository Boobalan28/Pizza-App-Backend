import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import '../Components/Card.css';
import {Button} from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addTOCart } from '../Actions/CartActions';
import { addtoCart } from '../Actions/SouceCartActions';
import { deleteFromCart } from '../Actions/CartActions';
import { deleteFromCarts } from '../Actions/SouceCartActions';
import Checkout from './Checkout';
import AOS from 'aos';
import 'aos/dist/aos.css';


// this is the pizza cart //
export default function Card(){

    AOS.init()

 const cartState = useSelector(state => state.cartReducer)
 const cartItems = cartState.cartItems
 
 const dispatch = useDispatch()

 var subtotal = cartItems.reduce((x, item)=>x+item.prices, 0)
    
 return(
    <div data-aos='fade-down'>
        <div className='row' style={{marginTop:'30px'}}>
            <div>
                <h2 style={{marginLeft:'50px'}}>My Carts</h2>
            </div>
            {cartItems.map(item =>{
                return <div className='col-md-4'>
                <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{margin:'40px'}}>
                    <div id='head'>
                      <h4>{item.name}</h4>
                    </div> 
                    <div id='img'>
                      <img src={item.image} alt="pic" height="200px" width="200px"/>
                    </div>
                    <div style={{paddingLeft:'25px'}}>
                        <p style={{marginBottom:'10px'}}>Quantity: {item.quantity}</p>
                        <p style={{marginBottom:'10px'}}>Price:Rs {item.prices} ₹</p>
                        <p style={{marginBottom:'10px'}}>Varient: {item.varients}</p>
                        <p style={{marginBottom:'10px'}}>Category: {item.category}</p>
                        <p style={{marginBottom:'10px'}}>Add Quantity: <AddIcon fontSize="medium" color="primary" onClick={()=>{dispatch(addTOCart(item, item.quantity+1, item.varients))}} /> 
                        <b>{item.quantity}</b> 
                        <RemoveIcon fontSize="medium"  color="primary" onClick={()=>{dispatch(addTOCart(item, item.quantity-1, item.varients))}}/></p>
                    </div>
                    <div id='head'>
                        <Button className='btn' style={{border:'none'}} onClick={()=>{dispatch(deleteFromCart(item))}}>Remove</Button>
                    </div>
                </div>
            </div>   
            })}
        <div style={{marginLeft:'50px'}}>
            <h2>Total Of Pizzas:Rs {subtotal} ₹</h2>
            <Checkout subtotals={subtotal}/>
        </div>
    </div>
        <div>
            <Souces/>
        </div>
    </div>
  ) 
};

// this is the souce cart //
function Souces(){

    const cartState = useSelector(state => state.cartReducer)
 const cartItem = cartState.cartItem

 const dispatch = useDispatch()

 var subtotal = cartItem.reduce((x, items)=>x+items.prices, 0)
    return(
 <div className='row' style={{marginTop:'30px'}}>
        {cartItem.map(items =>{
   return <div className='col-md-4'>
            <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{margin:'40px'}}>
                <div id='head'>
                  <h4>{items.name}</h4>
                </div> 
                <div id='img'>
                  <img src={items.img} alt="pic" height="200px" width="200px"/>
                </div>
                <div style={{paddingLeft:'25px'}}>
                    <p style={{marginBottom:'10px'}}>Quantity: {items.quantity}</p>
                    <p style={{marginBottom:'10px'}}>Price:Rs {items.prices} ₹</p>
                    <p style={{marginBottom:'10px'}}>Category: {items.category}</p>
                    <p style={{marginBottom:'10px'}}>Add Quantity:<AddIcon fontSize="medium" color="primary" onClick={()=>{dispatch(addtoCart(items,items.quantity+1))}}/> <b>{items.quantity}</b> 
                    <RemoveIcon fontSize="medium"  color="primary" onClick={()=>{dispatch(addtoCart(items,items.quantity-1))}}/></p>
                </div>
                <div id='head'>
                    <Button className='btn' style={{border:'none'}} onClick={()=>{dispatch(deleteFromCarts(items))}} >Remove</Button>
                </div>
            </div>
        </div>   
        })}
         <div style={{marginLeft:'50px'}}>
            <h2>Total Of Souces:Rs {subtotal} ₹</h2>
            <Checkout subtotals={subtotal}/>
        </div>
    </div>

    )
};