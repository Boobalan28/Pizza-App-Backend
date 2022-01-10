const express = require('express');
const router = express.Router();
const pizzamodule = require('../Modules/PizzaModule');


router.get('/getpizza',pizzamodule.getpizza);
router.post('/getpizzabyid/:pizzaid',pizzamodule.getpizzabyid);
router.post('/addpizza',pizzamodule.addpizza);
router.patch('/updatepizza/:pizzaid',pizzamodule.updatepizza);
router.delete('/deletepizza/:pizzaid',pizzamodule.deletepizza);

module.exports = router;  