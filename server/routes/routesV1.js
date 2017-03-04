const express = require('express');
const router = express.Router();

const Dashboard = require('../controllers/dashboard');

router.get('/dashboard', Dashboard.getData);

module.exports = router;
