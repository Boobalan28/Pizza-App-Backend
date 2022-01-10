import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import { addtoCart } from '../Actions/SouceCartActions';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Souce({souces}) {

     AOS.init()

    const[quantity,setquandity] = useState(1)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     const dispatch = useDispatch();
     function addtocart(){
       dispatch(addtoCart(souces,quantity))
      }

    return (
      <div data-aos='zoom-in' key={souces._id}>
        <div style={{margin:"40px"}} className="shadow-lg p-3 mb-5 bg-white rounded">
          <h4 id="h4">{souces.name}</h4>
           <div onClick={handleShow} id="card">
        <img src={souces.img} id="img" alt="pic" height="200px" width="200px"/>
           </div>
            <div id="flex-container">
              <div className="w-40 m-1">
              <p style={{marginBottom:"0px"}}>Quandity:</p>
                    <select className='form-control' value={quantity} onChange={(b)=>{setquandity(b.target.value)}}>
                        {[...Array(10).keys()].map((x, i) =>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1">
                    <h6 className="m-1" style={{paddingLeft:"10px"}}>Prices:Rs {souces.price * quantity}₹</h6>
                </div>
                <div className="m-1">
                <h6 className="mt-1" style={{paddingLeft:"20px"}} value={souces.category}>Category:{souces.category}</h6>
                </div>
            </div>
                <div style={{display:"flex"}}>
                  <button className="btn" onClick={addtocart}>ADD TO CARD</button>
                  <div style={{marginLeft:"60px"}}>
                  <button className="btn" onClick={addtocart}><Link to="/card" style={{textDecoration:"none",color:"white"}}> BUY NOW </Link></button>
                  </div>
                </div>
                </div>

                <Modal show={show} onHide={handleClose}>
  <Modal.Header closeLabel>
    <Modal.Title>{souces.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img src={souces.img} id="img" alt="pic" height="400px" width="400px"/>
  <p style={{paddingLeft:"10px"}}>{souces.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button className="btn" onClick={handleClose} style={{border:"none"}}>Close</Button>
  </Modal.Footer>
</Modal>
            
        </div>
    );
}