import './App.css';
import Home from './screens/Home';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Card from './Components/Card';
import {Signup} from './Components/Signup';
import {Login} from './Components/Login';
import Orders from './Components/Orders';
import Admin from './screens/Admin';
import Heading from "./Components/Navbar";




function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    <Heading/>

    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Home" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/Signup" component={Signup} />
    <Route path="/card" component={Card} />
    <Route path="/orders" component={Orders}/>
    <Route path="/admin" component={Admin} />
    </Switch>
    </BrowserRouter>
    </div>
);
}

export default App;
