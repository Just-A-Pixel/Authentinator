const express = require("express");
const router = express.Router();
const { getClothes, addClothesDB } = require("../controllers/clothes");

router.get("/", getClothes);
router.post("/", addClothesDB);

// TODO:
// Make filter


module.exports = router;
