import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import {deleteUser, getAllUsers} from "../Actions/UserAction";
import Button from '@mui/material/Button';

export default function Userslist() {

    const dispatch = useDispatch()
  const usersstate = useSelector(state=>state.getAllUsersReducer)
  const {error , loading , users} = usersstate

    useEffect(() => {

        dispatch(getAllUsers())
        
    }, [])

    return (
        <div>
            <h3>Users list</h3>
            {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
       <table className='table table-striped table-bordered table-responsive-sm'>
           <thead className='table-dark'>
         <tr>
             <th>User Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Delete</th>
         </tr>
           </thead>

           <tbody>
               {users && users.map(user=>{ 
                   return <tr>
                       <td>{user._id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td><Button variant="contained" color="error" onClick={()=>{dispatch(deleteUser(user._id))}}>Delete</Button></td>
                   </tr>
               })}
           </tbody>

       </table>

        </div>
    )
}
