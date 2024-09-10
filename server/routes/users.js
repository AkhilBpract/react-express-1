const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.get("/", userController.getItems);
router.post("/", userController.createItem);
module.exports = router;