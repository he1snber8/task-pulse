// routes/tasks.js
const express = require("express");
const auth = require("../middleware/auth");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const router = express.Router();
router.use(auth);
router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
module.exports = router;