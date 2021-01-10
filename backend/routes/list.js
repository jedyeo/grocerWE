const express = require('express');
const router = express.Router();

const listController = require('../controllers/list');

router.get('/', listController.getLists);

module.exports = router;