const express = require("express");
const router = express.Router();
const { getUserItems, updateItems, getAllItems } = require("../controllers/cart");
const { authenticateToken } = require("../middleware/auth")

router.get("/", getAllItems);
router.get("/user", authenticateToken, getUserItems)
router.post("/", updateItems);

module.exports = router;