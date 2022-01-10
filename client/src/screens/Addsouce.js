import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from '../Components/Success'; 


export default function Addsouce() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch()

  const addSouce = async (souce) => {
      var response = await axios.post(`http://localhost:8000/Souce/${souce}`, {souce})
      console.log(response);
      window.location.reload()
  }
  
  function formHandler(event){

    event.preventDefault();

    const souce ={
        name,
        image,
        description,
        category,
        price
    }

    console.log(souce);
    dispatch(addSouce(souce));

  }
  
    return (
        <div>
        <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
          <h3>Add Souce</h3>
          <form onSubmit={formHandler}>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <br></br>
            <input
              className="form-control"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
             <br></br>
            <input
              className="form-control"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
             <br></br>
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
             <br></br>
            <input
              className="form-control"
              type="text"
              placeholder="Image Url"
              value={image}
              onChange={(e) => {
                setimage(e.target.value);
              }}
            />
            <button className='btn mt-3' type='submit'>Add Souce</button>
          </form>
        </div>
      </div>
    )
}
