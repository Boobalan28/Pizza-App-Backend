const express =require ("express");
var cookieParser = require('cookie-parser');
var cors = require('cors');
const path = require('path');

// import files //
const Souce = require("./Models/soucemodels");
const pizzasRoute = require('./Routers/PizzaRouter');
const soucesRoute = require('./Routers/SouceRouter');
const userRoute = require('./Routers/UserRouter');
const db = require("./dbconnected");
const paymentRoute = require("./Routers/PaymentRouter");

// setup server //
const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser());
 
// import routes //
app.use('/Pizza',pizzasRoute);
app.use('/Souce',soucesRoute);
app.use('/Users',userRoute);
app.use('/Orders',paymentRoute);


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

// running port //
const port=process.env.PORT || 8000;

app.listen(port,() =>`server running`);