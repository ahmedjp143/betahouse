const { housevalidation, housemodel } = require('../models/houseModel');

const houseGETdata = async (req, res, next) => {
  try {
    const data = await housemodel.find();
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

// get by id
const getById = async (req, res, next) => {
  const data = await housemodel.findById(req.params.id);
  res.send(data);
};

// house post data
const housepostdata = async (req, res, next) => {
  try {
    // joi validation
    let { error } = housevalidation(req.body);
    if (error) return res.send(error.message);
    // post data to server
    const housepost = await housemodel(req.body);
    await housepost.save();
    res.send({ status: true, message: 'successfully created' });
  } catch (error) {
    console.log(error.message);
  }
};

const houseputdata = async (req, res, next) => {
  // joi validation
  let { error } = housevalidation(req.body);
  if (error) return res.send(error.message);
  let { id } = req.params;
  const updatedata = await housemodel.findByIdAndUpdate(
    id,
    {
      typeHouse: req.body.typeHouse,
      area: req.body.area,
      address: req.body.address,
      rent: req.body.rent,
      deposit: req.body.deposit,
      parking: req.body.parking,
      imagespriview: req.body.imagespriview,
      isAvailable: req.body.isAvailable,
      Rooms: req.body.Rooms,
      toilets: req.body.toilets,
      MasterRoom: req.body.MasterRoom,
      faafaahin: req.body.faafaahin,
    },
    { new: true }
  );
  res.send({
    status: 'success',

    message: 'succeesfully updata record',
  });
};

// delete record
const deleteRecord = async (req, res, next) => {
  let { id } = req.params;
  const deletedata = await housemodel.findByIdAndDelete(id);
  res.send({
    status: true,
    message: 'successfully deleted record',
    deletedata,
  });
};

module.exports = {
  houseGETdata,
  housepostdata,
  houseputdata,
  deleteRecord,
  getById,
};
