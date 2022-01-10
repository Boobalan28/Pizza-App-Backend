const mongoose = require('mongoose');

const Schema = mongoose.Schema
const souceschema = new Schema({
    name:{type:String,minlength:5, maxlength:50, required:true},
    price:{type:Number, required:true},
    img:{type:String, required:true},
    category:{type:String,minlength:5, maxlength:50, required:true},
    description:{type:String,minlength:5,maxlength:100, required:true}
})

const Souce = mongoose.model('soucemodel', souceschema, 'Souces')

module.exports = Souce;