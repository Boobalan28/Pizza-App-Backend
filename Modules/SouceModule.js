const Souce = require('../Models/soucemodels');
const joi = require('joi');

// create souce //

exports.addsouce = async (req,res,next) =>{

    const schema = joi.object({
        name:joi.string().min(5).max(50).required(),
        price:joi.number().required(),
        img:joi.string().required(),
        category:joi.string().min(5).max(50).required(),
        description:joi.string().min(5).max(100).required(),
    })

    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')

    const souce = new Souce({
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        category: req.body.category,
        description: req.body.description,
    })
    try{
        var response = await souce.save();
        res.send(response)
    }catch(err){
        res.status(400).send(err)
    }

}

/// get souce ///

exports.getsouce = async(req,res,next) =>{
    const responce = await Souce.find(); 
    res.send(responce);
}

// update souce //
exports.updatesouce = async (req,res,next)=>{ 
    const {souceId} = req.params; 
    const response = await Souce.findByIdAndUpdate(souceId,{
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        img:req.body.img,
        description:req.body.description
    });
    res.send(response);
} 

// delete souce //
exports.deletesouce = async (req,res,next)=>{
    const {souceId} = req.params; 
    const response = await Souce.findByIdAndRemove(souceId)
    res.send(response);
}
