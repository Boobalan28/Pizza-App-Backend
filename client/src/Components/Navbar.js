import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "./Pizza.css";
import {Link} from "react-router-dom"; 
import {useDispatch,useSelector} from 'react-redux';
import { logoutUser } from "../Actions/UserAction";

export default function Heading() {

   const cartstate = useSelector(state => state.cartReducer);
   const userstate = useSelector(state => state.loginUserReducer);
   const {currentUser} = userstate;
   const [currentUsers, setcurrentUsers] = useState(null);

   const handleMenu = (event) => {
    setcurrentUsers(event.currentTarget);
  };

  const handleClose = () => {
    setcurrentUsers(null);
  };

  const dispatch = useDispatch();

  return (
    <Box id="nav" sx={{ flexGrow:1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }} href="/Home">
           <Button  style={{fontSize:"25px"}}><Link to="/Home" style={{textDecoration:"none",color:"white"}}>PIZZA</Link></Button>
          </Typography>
          {currentUser ? (<h5 id="h5">{currentUser.name}
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit">
            <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              currentUsers={currentUsers}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(currentUsers)}
              onClose={handleClose}>
              <MenuItem><Link to="/orders" style={{textDecoration:"none",color:"black"}}> Orders</Link></MenuItem>
              <MenuItem onClick={()=>{dispatch(logoutUser())}}> Log Out</MenuItem>
            </Menu>
          </h5>) : (<Button color="inherit" style={{fontSize:"18px"}} to="/login">
            <Link to="/login"  style={{textDecoration:"none",color:"white"}}>Login</Link></Button>)}
          <Button
            color="inherit" style={{fontSize:"18px"}} to="/card"
            endIcon={
              <IconButton
                style={{ width: "20px", height: "10px" }}
                aria-label="cart">
                <Badge
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  badgeContent={cartstate.cartItems.length}
                  color="secondary">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>}>
                <Link to="/card"  style={{textDecoration:"none",color:"white"}}>
                CART
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
