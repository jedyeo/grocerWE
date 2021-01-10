const express = require('express');
const router = express.Router();

const groupController = require('../controllers/group');

router.get('/', groupController.getGroups);

module.exports = router;