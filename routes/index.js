const express = require('express');
const router = express.Router();
const todoRoutes = require('./todo.route');

router.use('/todo', todoRoutes);

module.exports = router;
