const express = require("express");
const router = express.Router();
const { signUp, login} = require("../controllers/auth")
const {checkUserExist} = require("../middleware/auth")

router.post("/signup", checkUserExist, signUp);
router.post("/login", checkUserExist, login);

module.exports = router;
