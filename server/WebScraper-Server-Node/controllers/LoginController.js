const HttpError = require('../models/http-error');
const User = require('../models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const postLoginData = async (req, res, next) => {
    const {email, password} = req.body;
    console.log(req.body)

    let existingUser;
    try {

        // Check if the user exists for the below email id or not
        existingUser = await User.findOne({email: email})
        console.log(existingUser)
    } catch (err) {
        const error = new HttpError(
            'Logging in failed, please try again later',
            500
        )
        console.log('problem')
        return next(error);
    }

    let salt = existingUser.salt;
    let userPassword = existingUser.password;
    let id = existingUser._id
    let isPasswordValid = false;
    try {
        
        // Creating a hash of a password
        const hash = crypto.createHmac('sha256', salt)
                            .update(password)
                            .digest('hex');

        // If the hash mathches with the password from database
        if (hash === userPassword) {
            isPasswordValid = true;
        }
        
    } catch(err) {
        const error = new HttpError(
            'Incorrect password',
            500
        )
        return next(error)
    }

    try {
        if (isPasswordValid === true) {
            // Create a variable token
            let token;

            // Create a token which contains the id, email, secret key and duration
            token = jwt.sign(
                {
                    userId: id,
                    email: existingUser.email
                },
                'supersecret_dont_share',
                {expiresIn: '1h'}
            );
            
            // Send the JSON data which contains id, email and token as a response
            res.status(201).json({ userId: id, email: existingUser.email, token: token })
            console.log("Login Successful!");
        }
    } catch (err) {

        // Catch the error if any
        const error = new HttpError(
            'Logging in failed, please try again later',
            500
        )
        return next(error);
    }
}

exports.postLoginData = postLoginData;