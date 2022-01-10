const express = require('express');
const router = express.Router();
const soucemodule = require('../Modules/SouceModule');


router.get('/getsouce',soucemodule.getsouce);
router.post('/addsouces',soucemodule.addsouce);
router.patch('/updatesouce/:souceId',soucemodule.updatesouce);
router.delete('/deletesouce/:souceId',soucemodule.deletesouce);

module.exports = router;