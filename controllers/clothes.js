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
  console.log(req.body);
 
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

module.exports = {getClothes, addClothesDB}