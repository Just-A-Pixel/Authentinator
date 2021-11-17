const clothSchema = require("../models/clothes");

const getClothes = async (req, res) => {
  try {
    const data = await clothSchema.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const addClothesDB = async (req, res) => {
 
  const newCloth = new clothSchema( {
    "gender": req.body.gender,
    "name": req.body.name,
    "new": req.body.new,
    "sale": req.body.sale
  });

  try {
    const data = await newCloth.save();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err)
  }
};

const filterByMale = async (req, res) => {
  try {
    const data = await clothSchema.find({"gender": "M"});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const filterByFemale = async (req, res) => {
  try {
    const data = await clothSchema.find({"gender": "F"});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const filterByNew = async (req, res) => {
  try {
    const data = await clothSchema.find({"new": true});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const filterBySale = async (req, res) => {
  try {
    const data = await clothSchema.find({sale: {begin: true}});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {getClothes, addClothesDB, filterByMale, filterByFemale, filterByNew, filterBySale}