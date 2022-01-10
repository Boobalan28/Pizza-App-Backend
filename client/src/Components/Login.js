import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Login.css';
import '../Components/Pizza.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { loginUser } from '../Actions/UserAction';
import Loading from './Loading';
import Error from './Error';

export function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState("");


  useEffect(() => {

    if(localStorage.getItem('currentUser'))
    {
        window.location.href='/'
    }}, [])

    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error} = loginstate

  const dispatch = useDispatch()

  function login(){
    const user={email , password}
    dispatch(loginUser(user))
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
    <div className="signup" >
      {loading && (<Loading/>)}
      <Box sx={{ display: 'flex', flexDirection: "column", width: "500px", marginTop: "80px", marginBottom: "50px", borderRadius: "10px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="signup-form">
          <h2>LOGIN <LoginIcon fontSize="large" color="primary"/></h2> 
          {error && (<Error error='Invalid Credentials'/>)}
          <TextField style={{ margin: "20px", width: "350px" }}
            label=" Email ID"
            type="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            required />
          <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showpassword ? 'text' : 'password'}
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              required
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
              label="Password" />
          </FormControl>

          <Button style={{ width: "250px", height: "50px", border: "none", marginBottom: "10px", marginTop: "10px", fontSize:"18px"}} className='lbtn' onClick={login}>LOGIN</Button>
          <p>Don't have account ? <Link to="/Signup" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>Sign Up</Link></p>
        </div>
      </Box>
    </div>
    </>
  );
}
