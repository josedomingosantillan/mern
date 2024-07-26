const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);