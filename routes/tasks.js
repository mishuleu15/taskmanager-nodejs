const { getAllTasks } = require('../controllers/tasks');

const express = require('express');
const router = express.Router();

router.route('/').get(getAllTasks);

module.exports = router;
