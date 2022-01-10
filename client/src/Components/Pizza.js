import React,{useState} from 'react';
import './Pizza.css';
import {Button,Modal} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { addTOCart } from '../Actions/CartActions';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default function Pizza({pizzas}) {

    AOS.init()

    const[varients,setvarient] = useState('small')
    const[quantity,setquandity] = useState(1)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    function addtocart(){

    dispatch(addTOCart(pizzas, quantity, varients)) 
    
   }
    return (
        <div data-aos='zoom-in' key={pizzas._id}>
        <div style={{margin:'40px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
             <h4 id="h4" style={{marginBottom:"0px"}}>{pizzas.name}</h4>
           <div onClick={handleShow} id="card">
        <img src={pizzas.image}  alt="pic" height="200px" width="200px"/>
           </div>
            <div className="flex-container">
              <div className="w-100 m-1">
                    <p style={{marginBottom:"0px"}}>Varients:</p>
                    <select className='form-control' value={varients} onChange={(b)=>{setvarient(b.target.value)}}>
                        {pizzas.varients.map(varie =>{
                            return <option value={varie}>{varie}</option>
                        })}

                    </select>
                </div>
                <div className="w-100 m-1">
                    <p style={{marginBottom:"0px"}}>Quandity:</p>
                    <select className='form-control' value={quantity} onChange={(b)=>{setquandity(b.target.value)}}>
                        {[...Array(10).keys()].map((x, i) =>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className='m-1'>
                    <h6 className='mt-1'>Prices: Rs{pizzas.price[0][varients] * quantity} ₹</h6>
                </div>
                <div className='m-1'>
                    <h6 value={pizzas.catogory} className='mt-1' style={{paddingLeft:'10px'}}>Category:{pizzas.category}</h6>
                </div>
            </div>
                <div style={{display:"flex"}}>
                    <button className="btn" onClick={addtocart}>ADD TO CARD</button>
                    <div style={{marginLeft:"60px"}}>
    <button className="btn" onClick={addtocart}><Link to="/card" style={{textDecoration:"none",color:"white"}}> BUY NOW 
    </Link></button>
                  </div>
                </div>
                </div>
          {/* this is the model card coding */}
                <Modal show={show} onHide={handleClose}>
  <Modal.Header closeLabel>
    <Modal.Title>{pizzas.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img src={pizzas.image} id="img" alt="pic" height="400px" width="400px"/>
  <p style={{paddingTop:"10px"}}>{pizzas.discription}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button className="btn" onClick={handleClose} style={{border:"none"}}>Close</Button>
  </Modal.Footer>
</Modal>
        </div>
    );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             