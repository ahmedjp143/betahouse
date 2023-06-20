const {
  Companyvalidation,
  CompanyInfoModel,
} = require('../models/companyinfomodel');
// get data from company
const getcompanyinfo = async (req, res, next) => {
  try {
    const getdata = await CompanyInfoModel.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get by id
const companygetoneinfo = async (req, res, next) => {
  try {
    let { id } = req.params;
    const getbyid = await CompanyInfoModel.findById(id);
    res.status(200).send(getbyid);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// post data from server

const companypostdata = async (req, res, next) => {
  try {
    const { error } = Companyvalidation(req.body);
    if (error) return res.status(400).send(error.message);

    const postdata = await CompanyInfoModel(req.body);
    await postdata.save();
    res.status(200).send({
      status: true,
      message: 'succefully created company information',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// put or update company information

const companyupdateinfo = async (req, res, next) => {
  try {
    const { error } = Companyvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    let { id } = req.params;

    const updatadata = await CompanyInfoModel.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        location: req.body.location,
        logo: req.body.logo,
        email: req.body.email,
        Com_Plane_Email: req.body.Com_Plane_Email,
        Com_Plane_Phone: req.body.Com_Plane_Phone,
        facebook: req.body.facebook,
        tiktok: req.body.tiktok,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
      },
      {
        new: true,
      }
    );
    await updatadata.save();
    res.status(200).send({
      status: true,
      updatadata,
      message: 'successfully updated company information',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  getcompanyinfo,
  companypostdata,
  companygetoneinfo,
  companyupdateinfo,
};
