const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    salt: {type: String, required: true, unique: true},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);