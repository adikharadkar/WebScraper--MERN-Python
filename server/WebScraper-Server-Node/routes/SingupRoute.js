const express = require('express')
const router = express.Router();

const HttpError = require('../models/http-error');
const signupController = require('../controllers/SignupController');

router.post('/signup', signupController.postSignupData);

module.exports = router;