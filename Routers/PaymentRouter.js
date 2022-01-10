const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51KAW3lSAseK0DCxMjFvnVU88Ede7T8fLyCtgW2hUKtyoIIEfpAz1HjEDQnEJdquUqQHQTqi3N0AdVBAziaZhdS0q00LECR7kXg")
const Order = require('../Models/ordermodel');

router.post("/placeorders", async(req, res) => {
  
  const {token , subtotals , currentUser , cartItems , cartItem} = req.body

  try {
      const customer = await stripe.customers.create({
          email : token.email,
          source:token.id
      })

      const payment = await stripe.charges.create({
          amount:subtotals*100,
          currency:'INR', 
          customer : customer.id,
          receipt_email : token.email
      }, {
          idempotencyKey : uuidv4()
      })

      if(payment)
      {
              const neworder = new Order({
              name : currentUser.name,
              email : currentUser.email ,
              userid : currentUser._id ,
              orderItems : cartItems ,
              orderItem : cartItem, 
              orderAmount : subtotals,
              shippingAddress : {
                  street : token.card.address_line1,
                  city : token.card.address_city,
                  country : token.card.address_country,
                  pincode : token.card.address_zip
              },
              transactionId : payment.source.id
          })
          
          neworder.save()

          res.send('Order placed successfully')
      }
      else{
          res.send('Payment failed')
      }

  } catch (error) {
      return res.status(400).json({ message: 'Something went wrong' + error});
  }

});


router.post("/getuserorders", async(req, res) => {
  const {userid} = req.body
  try {
      const orders = await Order.find({userid : userid}).sort({_id : -1})
      res.send(orders)
  } catch (error) {
      return res.status(400).json({ message: 'Something went wrong' });
  }
});

router.get("/getallorders", async(req, res) => {

     try {
         const orders = await Order.find({})
         res.send(orders)
     } catch (error) {
         return res.status(400).json({ message: error});
     }

});

router.post("/deliverorder", async(req, res) => {

    const orderid = req.body.orderid
    try {
        const order = await Order.findOne({_id : orderid})
        order.isDelivered = true
        await order.save()
        res.send('Order Delivered Successfully')
    } catch (error) {

        return res.status(400).json({ message: error});
        
    }
  
});

module.exports = router