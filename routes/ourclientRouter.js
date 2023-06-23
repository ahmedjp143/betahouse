const express = require('express');
const {
  clientgetdata,
  clientgetbyid,
  clientpost,
  clientupdate,
} = require('../controllers/ourclientCtrl');

const router = express.Router();

router.get('/', clientgetdata);
router.get('/:id', clientgetbyid);
router.post('/', clientpost);
router.put('/:id', clientupdate);

module.exports = router;
