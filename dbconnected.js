const mongoose = require("mongoose");

const mongoURL="mongodb+srv://Boobalan:boobalan1234@cluster0.ixzoi.mongodb.net/Pizza-App";

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlparser:true});

var db = mongoose.connection

db.on('connected', () => {
    console.log('Mongo DB connected successfull')
})

db.on('error', () =>{ 
    console.log(`Mongo DB connection failed`)  
}) 

module.exports=mongoose