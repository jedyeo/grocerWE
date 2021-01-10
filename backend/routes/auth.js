const express = require('express');
const router = express.Router();

const authModule = require('../authentication/login');

router.post('/login', authModule.loginUser);

router.post('/signup', authModule.signUpUser);

module.exports = router;