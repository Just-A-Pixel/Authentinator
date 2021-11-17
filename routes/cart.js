const express = require("express");
const router = express.Router();
const { getUserItems, updateItems, getAllItems } = require("../controllers/cart");

router.get("/", getAllItems);
router.get("/:id", getUserItems)
router.post("/", updateItems);

module.exports = router;