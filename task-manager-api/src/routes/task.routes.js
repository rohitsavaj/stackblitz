const express = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/task.controller');
const router = express.Router();

router.get('/', controller.getAllTasks);
router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('status').optional().isIn(['To Do', 'In Progress', 'Done'])
], controller.createTask);
router.get('/:id', controller.getTaskById);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;
