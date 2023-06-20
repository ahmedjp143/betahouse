const mongoose = require('mongoose');
let joi = require('joi');
const companyInfoShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Com_Plane_Email: {
    type: String,
    required: true,
  },
  Com_Plane_Phone: {
    type: Number,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  tiktok: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
});

const CompanyInfoModel = mongoose.model('CompanyInfo', companyInfoShema);

// validation
function Companyvalidation(comObj) {
  let companyval = joi.object({
    name: joi.string().required(),
    location: joi.string().required(),
    logo: joi.string().required(),
    email: joi.string().email().required(),
    Com_Plane_Email: joi.string().email().required(),
    Com_Plane_Phone: joi.number().required(),
    facebook: joi.string().required(),
    tiktok: joi.string().required(),
    twitter: joi.string().required(),
    instagram: joi.string().required(),
  });
  return companyval.validate(comObj);
}

module.exports = {
  CompanyInfoModel,
  Companyvalidation,
};
