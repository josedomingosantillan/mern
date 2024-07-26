const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    theme: {
        type: String
    },
    permissions: {
        images: Boolean,
        videos: Boolean,
        texts: Boolean
    }
});

module.exports = mongoose.model('Theme', ThemeSchema);
