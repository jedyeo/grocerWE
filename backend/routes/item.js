const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');
const auth = require("../middleware/auth");

router.get('/', auth.checkCredentials, itemController.getItems);

router.post('/', auth.checkCredentials, itemController.createItem);

router.delete('/:id', auth.checkCredentials, itemController.deleteItem);

router.get('/:id', auth.checkCredentials, itemController.getItem);

module.exports = router;