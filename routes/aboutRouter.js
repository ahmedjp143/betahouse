const express = require('express');
const { aboutgetdata, aboutpostdata } = require('../controllers/aboutCtrl');
const router = express.Router();

router.get('/', aboutgetdata);

router.post('/', aboutpostdata);

module.exports = router;
