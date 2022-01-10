import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import axios from "axios";
import Button from '@mui/material/Button';
import {deletePizza} from '../Actions/PizzaActions';


export default function Pizzaslist() {

    const dispatch = useDispatch()

    const [pizzas,setPizzaList] = useState([])
    useEffect(async () => {
        const response = await axios.get('http://localhost:8000/Pizza/getpizza');
        setPizzaList(response.data);
    },[])

    // const deletePizza = async(id) => {
    //     var response = await axios.delete(`http://localhost:8000/Pizza/deletepizza/:${id}`)
    //     console.log(response);
    //     window.location.reload()
    // }

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

    const {error, loading } = pizzasstate;

    return (
    <div>
    {loading && (<Loading/>)}
    {error && (<Error error='Something went wrong'/>)}

     <h3>Pizzalist</h3>
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
        {pizzas && pizzas.map(pizza=>{

            return <tr>
                <td>{pizza.name}</td>
                <td>
                   Small : {pizza.price[0]['small']} <br/>
                   Medium : {pizza.price[0]['medium']} <br/>
                   Large : {pizza.price[0]['large']} 
                </td>
                <td>{pizza.category}</td>
                <td>
                <Button variant="contained" color="error" style={{marginRight:"10px"}} onClick={()=>{dispatch(deletePizza(pizza._id))}}>Delete</Button>
                <Button variant="contained"><Link style={{color: 'white',textDecoration:"none"}} to={`/admin/editpizza/${pizza._id}`}>Edit</Link></Button>
                </td>
            </tr>
        })}
        </tbody>

    </table>
        </div>
    )
}
