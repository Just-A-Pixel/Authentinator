const cartSchema = require("../models/cart");

const getAllItems = async (req, res) => {
  try {
    const data = await cartSchema.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const getUserItems = async (req, res) => {
    try{
        const data = await cartSchema.findById(req.params.id);
        res.json(data);
    } catch (err) {
        console.log(err)
    }
}

const updateItems = async (req, res) => {
  
  const id = req.body._id
  const arr = req.body.items
  try {
    const data = await cartSchema.findByIdAndUpdate(id, {items: arr});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUserItems, updateItems, getAllItems };
