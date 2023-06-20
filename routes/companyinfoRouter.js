const express = require('express');
const {
  getcompanyinfo,
  companypostdata,
  companygetoneinfo,
  companyupdateinfo,
} = require('../controllers/companyinfoCTRL');

const router = express.Router();

router.get('/', getcompanyinfo);
router.get('/:id', companygetoneinfo);
router.post('/', companypostdata);
router.put('/:id', companyupdateinfo);

module.exports = router;
