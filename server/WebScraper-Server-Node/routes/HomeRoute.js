const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

// Import Error Handler
const HttpError = require('../models/http-error');
const HomeController = require('../controllers/HomeController');

// router.use(checkAuth);
router.get('/', HomeController.getHomePage);
router.post('/', HomeController.searchJob);

// Demo to throw an error if any
/*
    if (!place) {
        throw new HttpError('Could not find a place', 404);
    }
*/

module.exports = router;