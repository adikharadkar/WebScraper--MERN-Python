const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {

    try {
         // This will help to split the string into an array and we will access the second value of the array which is TOKEN
        const token = req.headers.authorization.split(' ')[1];      // Authorization: 'Bearer TOKEN'
        if (!token) {
            throw new Error('Authentication Failed!');
        }
        const decodedToken = jwt.verify(token, 'supersecret_dont_share');
        req.userData = { userId: decodedToken.userId }
        next();
    } catch (err) {
        const error = new HttpError('Authentication failed!', 401);
        return next(error);
    }

   
    
}