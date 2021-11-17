const userSchema = require("../models/users");
const cartSchema = require("../models/cart");

const signUp = async (req, res) => {
  if (req.body.userExists == true) {
    return res.status(400).json({ userExists: true });
  }
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new userSchema({
    username: username,
    password: password,
  });

  const newCart = new cartSchema({
    _id: req.body.username,
    items: req.body.items,
  });

  try {
    const data = await newUser.save();
    // res.send(data);
    console.log("User Created");
    data = await newCart.save();
    console.log("Cart Created");
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  if (req.body.userExists == false)
    return res.status(400).json({ userExists: false, user: null });
  try {
    const login = await userSchema.find({
      username: req.body.username,
      password: req.body.password,
    });

    res.send({ user: req.body.username });
  } catch (err) {
    console.log({ message: err });
  }
};

module.exports = { signUp, login };
