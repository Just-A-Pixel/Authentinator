const express = require("express");
const router = express.Router();
const {getClothes, addClothesDB, filterByMale, filterByFemale, filterByNew, filterBySale} = require("../controllers/clothes");

router.post("/", addClothesDB);
router.get("/", getClothes);
router.get("/male", filterByMale);
router.get("/female", filterByFemale);
router.get("/new", filterByNew);
router.get("/sale", filterBySale);

module.exports = router;
