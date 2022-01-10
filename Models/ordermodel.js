const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    name : {type: String , require:true},
    email: {type: String , require:true},
    userid : {type: String , require:true},
    orderItems : [],
    orderItem : [],
    shippingAddress : {type:Object},
    orderAmount : {type:Number , require:true},
    isDelivered : {type:Boolean , require:true , default: false},
    transactionId : {type:String , require:true}
},{
    timestamps : true
})

const Ordersmodel = mongoose.model('Ordersmodel', orderSchema, 'orders')

module.exports = Ordersmodel;

