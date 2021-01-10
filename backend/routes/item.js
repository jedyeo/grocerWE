const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');

router.get('/', itemController.getItems);

router.post('/', itemController.createItem);

router.delete('/:id', itemController.deleteItem);

router.get('/:id', itemController.getItem);

module.exports = router;