import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import axios from "axios";
import Button from '@mui/material/Button';

export default function Soucelist() {
    
    const dispatch = useDispatch();
    
    const [souces,setSouceList] = useState([])
      useEffect(async () => {
        const response = await axios.get('http://localhost:8000/Souce/getsouce');
        setSouceList(response.data);
    },[])

    const deleteSouce = async(id) =>{
        var response = await axios.delete(`http://localhost:8000/Souce/deletesouce/${id}`, {souces})
        console.log(response);
        window.location.reload()
    }

    return (
        <div>
         <h3>Soucelist</h3>
        <table  className='table table-bordered border-primary table-responsive-sm'>
    
            <thead className='table-dark'>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {souces && souces.map(souce=>{
    
                return <tr>
                    <td>{souce.name}</td>
                    <td>
                      {souce.price}
                    </td>
                    <td>{souce.category}</td>
                    <td>
                    <Button variant="contained" color="error" style={{marginRight:"10px"}} onClick={()=>deleteSouce(souce._id)}>Delete</Button>
                    </td>
                </tr>
            })}
            </tbody>
    
        </table>
            </div>
    )
}
