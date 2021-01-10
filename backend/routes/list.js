const express = require('express');
const router = express.Router();

const listController = require('../controllers/list');
const auth = require("../middleware/auth");

// TODO, authenticate this route once Jed gets HTTP working
router.get('/', listController.getLists);

router.get('/:id', auth.checkCredentials, listController.getSpecificList);

router.post('/', auth.checkCredentials, listController.createList);

router.patch('/:id/add', auth.checkCredentials, listController.addToList);

router.patch('/:id/remove', auth.checkCredentials, listController.removeFromList);

router.delete('/:id', auth.checkCredentials, listController.deleteList);

module.exports = router;