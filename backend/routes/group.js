const express = require('express');
const router = express.Router();

const groupController = require('../controllers/group');
const auth = require("../middleware/auth");

router.get('/:id', auth.checkCredentials, groupController.getGroup);

router.post('/', auth.checkCredentials, groupController.createGroup);

router.patch('/:id', auth.checkCredentials, groupController.addUserToGroup);

router.patch('/:id', auth.checkCredentials, groupController.removeUserFromGroup);

router.delete('/:id', auth.checkCredentials, groupController.deleteGroup);

module.exports = router;