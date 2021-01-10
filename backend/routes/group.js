const express = require('express');
const router = express.Router();

const groupController = require('../controllers/group');

router.get('/:id', groupController.getGroup);

router.post('/', groupController.createGroup);

router.patch('/:id', groupController.addUserToGroup);

router.patch('/:id', groupController.removeUserFromGroup);

router.delete('/:id', groupController.deleteGroup);

module.exports = router;