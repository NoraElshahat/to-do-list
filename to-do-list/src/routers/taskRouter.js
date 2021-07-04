const express = require('express');
const router = express.Router();
const { addNewTask, listAllTasks } = require('../controllers/taskController');

router.post('/add-task', addNewTask);
router.get('/all-tasks', listAllTasks);

module.exports = router;
