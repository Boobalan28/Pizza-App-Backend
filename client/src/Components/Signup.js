import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import React from 'react';
import '../Components/Login.css';
import '../Components/Pizza.css';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../Actions/UserAction';
import {useState} from 'react';
import Error from './Error';
import Loading from './Loading';
import Success from './Success';


export function Signup() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [number, setnumber] = useState("");
  const [showpassword, setshowpassword] = useState("");

  const registerstate = useSelector(state =>state.registerUserReducer)
  const {error , loading , success} = registerstate

  const dispatch = useDispatch()
  
  function register(){

    if (password!==cpassword) {
      
      alert('Password are not matched')

    } else {
      const users= {
         name,
         email,
         password,
         number
      }
      console.log(users);
      dispatch(registerUser(users))  
    }
  }

  const handleClickShowPassword = () => {
    setshowpassword({ 
      showpassword:!showpassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
      <>
    <div className="signup">
      <Box sx={{ display: 'flex', flexDirection: "column", width: "500px", marginTop: "30px", marginBottom: "50px", borderRadius: "10px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="signup-form">
          <h2>SIGN UP <PersonAddAltIcon fontSize="large" color="primary"/></h2>
          {loading && (<Loading/>)}
          {success && (<Success success='User Registered Successfully' />)}
          {error && (<Error error='Email already registred' />)}
          <TextField style={{ margin: "10px", width: "350px" }}
            label="Name"
            type="text"
            value={name} 
            onChange={(e)=>{setname(e.target.value)}}
            required />
          <TextField style={{ margin: "10px", width: "350px" }}
            label=" Email ID"
            type="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            required />
          <TextField style={{ margin: "10px", width: "350px" }}
            label="Mobile Number"
            type="number"
            value={number}
            onChange={(e)=>{setnumber(e.target.value)}}
            required />
          <TextField style={{ margin: "10px", width: "350px" }}
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            required />
           <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showpassword ? 'text' : 'password'}
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
              endAdornment={<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showpassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
              label="Confirm Password"
              required />
          </FormControl><br />
          <Button style={{ width: "250px", height: "50px", border: "none", marginBottom: "20px",fontSize:"18px" }} className='lbtn' onClick={register}>SIGN UP</Button>
        </div>
      </Box>
    </div>
    </>
  );
}
