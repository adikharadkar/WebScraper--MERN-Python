const User = require('../models/user');
const HttpError = require('../models/http-error');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const postSignupData = async (req, res, next) => {
    const {username, email, password} = req.body;

    // Check if the user already has an account or not
    let existingUser;

    // If findOne() method fails, then error will be returned from catch block
    try {
        existingUser = await User.findOne({email: email});
    } catch (err) {
        const error = new HttpError(
            'Signing up failed! Please try again later.',
            500
        )
        res.status(500);
        return next(error);
    }
    
    // If user exists, then return an error with status code 422
    if (existingUser) {
        const error = new HttpError(
            'User exists already! Please login instead or change the email address.',
            422
        )
        res.status(422);
        return next(error);
    }

    // Generating a random salt of 16 bytes
    const salt = crypto.randomBytes(16).toString('hex');

    // Creating a hash of a password
    const hash = crypto.createHmac('sha256', salt)
                        .update(password)
                        .digest('hex');

    // Sending the username, email, hashed password and salt to the database
    const userData = new User({
        username,
        email,
        password: hash,
        salt
    });
    try {
        await userData.save();
    } catch (err) {
        const error = new HttpError(
            'User registration failed, please try again!',
            500
        );
        res.status(500);
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { 
                userId: userData._id,
                email: userData.email 
            }, 
            'supersecret_dont_share', 
            { expiresIn: '1h' }
        );
    } catch (err) {
        const error = new HttpError(
            'User registration failed, please try again!',
            500
        )
        return next(error);
    }
    
    res.status(201).json({ userId: userData._id,  email: userData.email, token: token });
}

exports.postSignupData = postSignupData;