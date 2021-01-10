const express = require('express');
const router = express.Router();

const listController = require('../controllers/list');

router.get('/', listController.getLists);

router.post('/', listController.createList);

router.patch('/:id/add', listController.addToList);

router.patch('/:id/remove', listController.removeFromList);

router.delete('/:id', listController.deleteList);

module.exports = router;