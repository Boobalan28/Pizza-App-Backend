const mongoose= require("mongoose");

const Schema=mongoose.Schema;
const UserSchema= new Schema({
    name:{type:String, minlength:1, maxlength:50, required:true},
    email:{type:String, required:true},
    number:{type:String, minlength:10, maxlength:10, required:true},
    password:{type:String, minlength:5,maxlength:10,required:true},
    isAdmin:{type:Boolean, required:true, default:false }
});

const Usermodel = mongoose.model('Usermodel', UserSchema, 'users')

module.exports = Usermodel;
