const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, taskController.getAllTasks);
router.post("/", authMiddleware, taskController.createTask);
router.get("/:id", taskController.getTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
module.exports = router;
