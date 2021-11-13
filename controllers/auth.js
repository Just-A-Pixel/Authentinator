const userSchema = require("../models/users");

const checkUserExist = async (req, res, next) => {
  let users;
  try {
    users = await userSchema.find({ username: req.body.username });

    if (users.length == 0) {
      req.body.userExists = false;
    } else {
      req.body.userExists = true;
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

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
  try {
    const data = await newUser.save();
    res.send(data);
    console.log("User Created");
  } catch (err) {
    res.status(500).send(err);
    console.log("User could not be created");
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

    res.send({user: req.body.username})
  } catch (err) {
      console.log({message: err})
  }
};

module.exports = { checkUserExist, signUp, login };
