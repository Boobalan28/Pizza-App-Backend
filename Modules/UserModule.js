const User = require('../Models/usermodel');
const joi = require('joi');
// create user

exports.postuser = async (req,res,next) =>{

    const Schema= joi.object({
        name:joi.string().min(1).max(50).required(),
        email:joi.string().required(),
        number:joi.string().min(10).max(10).required(),
        password:joi.string().min(5).max(10).required(),
    })
    
    // joi validate
    var {error} = await Schema.validate(req.body);
    if(error){
        console.log(error)
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
    
    // save in mangodb
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    })
    try {
        var response = await user.save();
        res.send(response)
    } catch (err) {
        res.status(400).send(err)
    }
}

// login user
exports.postUserLogin = async (req, res, next)=>{
    
    // save in mongo db
    const {email , password} = req.body

//  going to check user for login or not
    try {
        const users = await User.find({email , password})

        if(users.length > 0)
        {
            const currentUser = {
                name : users[0].name , 
                email : users[0].email,
                password : users[0].password, 
                isAdmin : users[0].isAdmin, 
                _id : users[0]._id
            }
            res.send(currentUser); 
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
}

exports.getallusers = async (req,res,next) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

exports.deleteusers = async (req,res,next) => {
    const {userId} = req.params;
    const response = await User.findOneAndDelete(userId)
    res.send(response);
}
