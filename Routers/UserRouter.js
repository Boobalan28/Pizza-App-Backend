const express = require('express');
const router = express.Router();
const usermodule = require('../Modules/UserModule');

router.post('/register',usermodule.postuser);
router.post('/login',usermodule.postUserLogin);
router.get('/getusers',usermodule.getallusers);
router.delete('/deleteusers/:userId',usermodule.deleteusers);


module.exports= router;