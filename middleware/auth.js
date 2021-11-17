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
      console.log("dwadawda")
      next();
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = {checkUserExist}