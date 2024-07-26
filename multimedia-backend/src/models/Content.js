const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['image', 'video', 'text'],
        required: true
    },
    url: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        enum: ['accion', 'romance', 'error'],
    },
    credits: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Content', ContentSchema);
