import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import Addpizza from './Addpizza';
import Addsouce from './Addsouce';
import Editpizza from './Editpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Soucelist from './Soucelist';
import Userslist from './Userslist';


export default function Admin() {

  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

    return (
        <div className="adminhead">
        <h2 style={{ fontSize: "35px", marginTop:"30px"}}>Admin Panel</h2>
            <div className="col-md-10">
            <ul className="adminfunctions">
              <li> 
                <Link to={'/admin/userslist'} style={{color: 'white',textDecoration:"none"}}>Users List</Link>
              </li>
              <li>
              <Link to={'/admin/pizzaslist'} style={{color: 'white',textDecoration:"none"}}>Pizzas List</Link>
              </li>
              <li>
              <Link to={'/admin/souceslist'} style={{color: 'white',textDecoration:"none"}}>Souce List</Link>
              </li>
              <li>
              <Link to={'/admin/addpizza'} style={{color: 'white',textDecoration:"none"}}>Add Pizza</Link>
              </li>
              <li>
              <Link to={'/admin/addsouce'} style={{color: 'white',textDecoration:"none"}}>Add Souce</Link>
              </li>
              <li>
              <Link to={'/admin/orderslist'} style={{color: 'white',textDecoration:"none"}}>Orders List</Link>
              </li>
            </ul>
  
            <Switch>
            <Route path="/admin" component={Userslist} exact/>
                <Route path="/admin/userslist" component={Userslist} exact/>
                <Route path="/admin/orderslist" component={Orderslist} exact/>
                <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
                <Route path="/admin/souceslist" component={Soucelist} exact/>
                <Route path="/admin/addpizza" component={Addpizza} exact/>
                <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/> 
                <Route path="/admin/addsouce" component={Addsouce} exact/>
            </Switch>
          </div>
        </div>
    )
}
