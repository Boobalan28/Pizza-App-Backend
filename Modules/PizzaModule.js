const Pizza = require('../Models/pizzasmodel');
const joi = require('joi');


// create pizza

exports.addpizza = async (req,res,next) => {

    const schema = joi.object({
       name:joi.string().min(1).max(50).required(),
       varients:joi.array(),
       price:joi.array(),
       category:joi.string().min(5).max(25).required(),
       image:joi.string().required(),
       description:joi.string().min(10).max(100).required()
    })
    // joi validate
    var {error} = await schema.validate(req.body);
    if(error){
        console.log(error)
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
   // save data in mongodb //   
    const pizza = new Pizza({
        name:req.body.name,
        varients:req.body.varients,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image,
        description:req.body.description
    })
    try{
        var responce = await pizza.save();
        res.send(responce)
    }catch(err){
        res.status(400).send(err)
    }
}

/// get pizza ///

exports.getpizza = async(req,res,next) =>{
    const responce = await Pizza.find();
    res.send(responce);
}

// get pizzaby id //

exports.getpizzabyid = async(req,res,next) =>{
    
    const pizzaid = req.body.pizzaid

 try {
     const pizza = await Pizza.findOne({_id : pizzaid})
     res.send(pizza)
 } catch (error) {
     return res.status(400).json({ message: error }); 
 }
}


// update pizza //
exports.updatepizza = async (req,res,next)=>{ 
    const pizzaid = req.params;
    const response = await Pizza.findOneAndUpdate({_id:pizzaid},{
        name:req.body.name,
        varients:req.body.varients,
        category:req.body.category,
        prices:req.body.prices,
        image:req.body.image,
        description:req.body.description
    });
    res.send(response);
} 

// delete pizzas //
exports.deletepizza = async (req,res,next)=>{
    const pizzaid = req.params.pizzaid;
    const response = await Pizza.findByIdAndRemove({_id: pizzaid})
    res.send(response);
}


