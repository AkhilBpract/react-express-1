const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/task", authMiddleware, taskController.getAllTasks);
router.post("/task", authMiddleware, taskController.createTask);

module.exports = router;
