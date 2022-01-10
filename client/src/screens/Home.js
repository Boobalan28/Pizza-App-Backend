import React from "react";
import Pizza from "../Components/Pizza";
import Souce from "../Components/Souce";
import "../App.css";
import axios from "axios";
import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPizzas } from "../Actions/PizzaActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";


export default function Home(){
    // get pizza actions //
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas(pizzas))
    },[]);

    //  get pizza data to home screen //
    const [pizzas,setPizzaList] = useState([])
    useEffect(async () => {
        const response = await axios.get('http://localhost:8000/Pizza/getpizza');
        setPizzaList(response.data);
    },[])

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

    const {error, loading } = pizzasstate;

    return(

        // it is run by pizzasdata
       <>
       {/* render the full data */}
       {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : 
        (<>
        <div className="row">
            {pizzas.map(pizza=>{
                return <div className="col-md-4" keys={Pizza._id}>
                    <div>
                        <Pizza pizzas={pizza}/>  
                    </div>
                </div>
            })}
        </div>
         <Soucees/>
         </>)}
      </>
    )
}

// it is run by soucesdata
 function Soucees(){

    //  get souce data to home page //
    const [souces,setSouceList] = useState([])
    useEffect(async () => {
        const response = await axios.get('http://localhost:8000/Souce/getsouce');
        setSouceList(response.data);
    },[])

    return(
        <div className="row">
            {souces.map(souce=>(
                 <div className="col-md-4" keys={Souce._id}>
                    <div>
                        <Souce souces={souce} />
                    </div>
                </div>
            ))}
        </div>
    )
}