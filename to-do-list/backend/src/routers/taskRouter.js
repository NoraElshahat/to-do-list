const express = require('express');
const router = express.Router();
const {
  addNewTask,
  listAllTasks,
  updateStatusTask,
} = require('../controllers/taskController');

router.post('/add-task', addNewTask);
router.get('/all-tasks', listAllTasks);
router.patch('/alter-task/:id/:status', updateStatusTask);

module.exports = router;
