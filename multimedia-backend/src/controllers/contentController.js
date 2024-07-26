const Content = require('../models/Content');
const Theme = require('../models/Theme');
const jwt = require('jsonwebtoken');

exports.createContent = async (req, res) => {
    const { title, type, url, theme, credits } = req.body;

    try {
        const newContent = new Content({ title, type, url, theme, credits });
        await newContent.save();
        res.status(201).json(newContent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getContents = async (req, res) => {
    try {
        const contents = await Content.find().populate('theme');
        res.status(200).json(contents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
