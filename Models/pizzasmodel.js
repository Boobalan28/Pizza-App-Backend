const mongoose= require("mongoose");

const Schema=mongoose.Schema;
const PizzaSchema= new Schema({
    name:{type:String,minlength:1,maxlength:50, required:true},
    varients:[],
    price:[],
    category:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true}
});

const pizzasModel= mongoose.model('pizzasModel', PizzaSchema,'Pizzas');

module.exports = pizzasModel;