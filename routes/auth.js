const express = require("express");
const router = express.Router();
const {checkUserExist, signUp, login} = require("../controllers/auth")


router.post("/signup", checkUserExist, signUp);
router.post("/login", checkUserExist, login);

module.exports = router;
