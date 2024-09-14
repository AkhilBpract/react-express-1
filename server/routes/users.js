const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.createItem);
router.post("/login", userController.login);
router.get("/users", authMiddleware, userController.getItems);
router.get("/profile", authMiddleware, userController.getProfile);

module.exports = router;
