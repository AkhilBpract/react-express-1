const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemControllers");

router.get("/", itemController.getItems);
router.post("/", itemController.createItem);

// Other routes (put, delete, etc.)

module.exports = router;
